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
        var syntax= 'ping %s -n %d -w %d -i %d -l %d';
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
         return {
             Max:parser.GetValue(data,'Maximum = ',','),
             Min:parser.GetValue(data,'Minimum = ',','),
             Avg:parser.GetValue(data,'Average = ','\r\n'),
         };
    }
}
exports.OsBuilder = OsBuilder;