#Ayaping

```var  requirePing = require('ayaping');```

Example:
```
var ip = 'google.com'
requirePing.ping.Ping(ip,function (data,err)
                        {
                            if(err)
                            {
                                console.log(err)
                            }
                            else
                            {
                                console.log(data)
                            }
                        })
```

also you can set 'Option'

```
var ip = 'google.com'
requirePing.ping.Ping(ip,function (data,err)
                        {
                            if(err)
                            {
                                console.log(err)
                            }
                            else
                            {
                                console.log(data)
                            }
                        },
                            {
                                timeOut:3000,
                                replyNumber:4,
                                TTL:128,
                                Size:320
                            }
                        )
```


this library is under development and currently works on windows
