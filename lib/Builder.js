
function Builder(platform) {
    this.Platform = platform;
    this.Name='';
    if(platform=='linux')
        this.Name='Linux';
    else if(platform.match(/^win/))
        this.Name='Windows';
    else if(platform === 'darwin' || platform === 'freebsd')
        this.Name='Mac';
    else if(platform === 'aix'  )
        this.Name='Aix';
    var req=require('./os/'+this.Name);
    var model=new req.OsBuilder();
    this.Ping=function(address,config)
    {
        return model.CreatePing(address,config);

    };
    this.BuildError=function (err)
    {
        return model.CreateError(err);

    };
    this.BuildResponse=function (data)
    {
        return model.CreateResponse(data);
    };
}
exports.Builder = Builder;