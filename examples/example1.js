var ping = require('../index');
var host = 'google.com';

ping.ping.Ping(host,function (data, err) {
    if(err)
        console.log(err);
    else
        console.log(data);
})