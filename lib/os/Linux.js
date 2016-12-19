var util = require('util');
var parser=require('./Parser')
function OsBuilder() {
    this.DefaultConfig={
        timeOut:2000,
        replyNumber:4,
        ttl:128,
        size:32
    };
    this.CreatePing=function(address,config)
    {
        var syntax= 'ping %s -c %d -W %d -t %d -s %d';
        var formats=[];
        formats.push(address);
        formats.push(config.replyNumber||this.DefaultConfig.replyNumber);
        formats.push(config.timeOut||this.DefaultConfig.timeOut);
        formats.push(config.ttl||this.DefaultConfig.ttl);
        formats.push(config.size||this.DefaultConfig.size);
        return util.format(syntax , formats[0], formats[1], formats[2], formats[3], formats[4] )
    }
    this.CreateError=function(error)
    {
        return error;
    }
    this.CreateResponse=function(data)
    {
        var data=parser.GetValue(data,'min/avg/max/mdev = ',' ms')
        if(!data)
        {
            return{
                Max:NaN,
                Min:NaN,
                Avg:NaN
            }
        }
        var sp=data.split('/')
        return {
            Max:parseInt(sp[2]),
            Min:parseInt(sp[0]),
            Avg:parseInt(sp[1]),
        };
    }
}
exports.OsBuilder = OsBuilder;