const fastify = require("fastify")
const snmp = require("net-snmp");

const app = fastify()
var oidsIps, ipDesejado;

app.get('/ips', (reply)=>{
    oidsIps = ["1.3.6.1.2.1.4.3.0", "1.3.6.1.2.1.4.10.0"]
    ipDesejado = "127.0.0.1"

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oidsIps, function (error, varbinds) {
        console.log(varbinds)
        if (!error) {
            console.error (error);
        } else {
            console.log(session)
            reply:{
            }
        }
        session.close ();
    });
})

app.listen({port: 3000}, ()=>{console.log('Server is running in port: 3000')})