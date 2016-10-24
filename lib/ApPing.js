var runner= require('./PingRunner');
function Ping(address, callBack, config) {
    var run=new runner.Runner();
    run.Ping(address,config,callBack)
}
exports.Ping = Ping;