var processor = require('child_process').exec;
var os = require('os');
var build=require('./Builder')
function Runner() {
    this.Ping=function(address, Config, callBack)
    {
        if(!Config)
            Config={
                timeOut:2000,
                replyNumber:4,
                TTL:128,
                Size:32
            }

        var platform=os.platform();
        var builder=new  build.Builder(platform);
        var syntax=builder.Ping(address,Config)
        console.log(syntax)
        processor(syntax,function(error, stdout, stderr){
            var err=null;
            var data=null;
            if (error != null)
            {
                data=builder.BuildError(error)
            }
            else
            {
                err=builder.BuildResponse(stdout)
            }
            callBack(err,data);

        })
    }
}

exports.Runner = Runner;