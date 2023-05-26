const fastify = require("fastify")
const snmp = require("net-snmp");
const app = fastify()
var oids, ipDesejado;

app.get('/process', ()=>{   
    oids = ["1.3.6.1.2.1.25.1.6.0"]
    ipDesejado = "127.0.0.1"

    // Numero de processos dentro do processador

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            console.log(varbinds);
        }
        session.close ();
    });
})

app.get('/memory', ()=>{
    oids = ["1.3.6.1.2.1.25.2.3.1.6.1", "1.3.6.1.2.1.25.2.2.0"]
    ipDesejado = "127.0.0.1"

    // 1º -A quantidade de armazenamento representada por esta entrada que é alocado, em unidades de Storage Allocation Units.
    // 2° - A quantidade de memória física principal de leitura/gravação, tipicamente RAM, contida pelo host.
    
    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            console.log(varbinds);
        }
        session.close ();
    });
})

app.get('/ip', ()=>{
    oids = ["1.3.6.1.2.1.4.3.0", "1.3.6.1.2.1.4.10.0"]
    ipDesejado = "127.0.0.1"

    // Numero de datagramas que entraram e sairam no meu PC, do protocolo IP

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            console.log(varbinds);
        }
        session.close ();
    });
})

app.get('/tcp', ()=>{
    oids = ["1.3.6.1.2.1.6.10.0" , "1.3.6.1.2.1.6.11.0"]
    ipDesejado = "127.0.0.1"

    // Numero de datagramas que entraram e sairam no meu PC, do protocolo IP

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            console.log(varbinds);
        }
        session.close ();
    });
})

app.get('/udp', ()=>{
    oids = ["1.3.6.1.2.1.7.1.0", "1.3.6.1.2.1.7.4.0"]
    ipDesejado = "127.0.0.1"

    // Numero de datagramas que entraram e sairam no meu PC, do protocolo IP

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            console.log(varbinds);
        }
        session.close ();
    });
})

app.listen({port: 3000}, ()=>{console.log('Server is running in port: 3000')})