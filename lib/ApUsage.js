var os = require("os");

function Usage()
{
    this.CpuAverage=function()
    {
        var totalIdle = 0, totalTick = 0;
        var cpus = os.cpus();
        for(var i = 0, len = cpus.length; i < len; i++) {
            var cpu = cpus[i];
            for(type in cpu.times) {
                totalTick += cpu.times[type];
            }
            totalIdle += cpu.times.idle;
        }
        return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
    }
    this.CpuUsage=function(callBack)
    {
        var t=this;
        var startMeasure = t.CpuAverage();
        setTimeout(function() {
            var endMeasure = t.CpuAverage();
            var idleDifference = endMeasure.idle - startMeasure.idle;
            var totalDifference = endMeasure.total - startMeasure.total;
            var percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);

            callBack(percentageCPU);

        }, 100);
    }
    this.MemoryUsage=function(callBack)
    {
        callBack(os.totalmem()-os.freemem())
    }
    this.UpTime=function(callBack)
    {
        callBack(os.uptime())
    }
    this.HardDiskUsage(callBack)
    {
        var type = os.type()

    }
}
exports.Usage = Usage;
