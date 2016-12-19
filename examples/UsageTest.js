var usage = require('../index');
var host = 'google.com';

var us=new usage.usage.Usage()
us.CpuUsage( function (data ) {

    console.log("Cpu Usage");
    console.log(data);
})
us.MemoryUsage( function (data ) {

    console.log("Memory Usage");
    console.log(data);
});
us.UpTime( function (data ) {

    console.log("UpTime");
    console.log(data);
});