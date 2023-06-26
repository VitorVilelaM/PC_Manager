const fastify = require("fastify")
const snmp = require("net-snmp");
const cors = require("@fastify/cors")

const app = fastify()
var oids, ipDesejado = "255.255.255.255";

app.register(cors, {
    origin: true, // Todas as urls de Front-End poderão ser acessar o back-end
})

app.post('/IP', (request, response)=>{
    const {ip} = request.body;
    ipDesejado = ip;
    response.send(ipDesejado)
})

app.get('/memory',(request, response)=>{
    oids = ["1.3.6.1.2.1.25.2.3.1.6.1", "1.3.6.1.2.1.25.2.2.0"]
  
    // 1º - A quantidade de armazenamento representada por esta entrada que é alocado, em unidades de Storage Allocation Units.
    // 2° - A quantidade de memória física principal de leitura/gravação, tipicamente RAM, contida pelo host.
    
    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            response.send(varbinds);
        }
        session.close ();
    });
        
})

app.get('/process', (request, response)=>{   
    oids = ["1.3.6.1.2.1.25.1.6.0"]
 
    // Numero de processos dentro do processador

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            response.send(varbinds);
        }
        session.close ();
    });
})

app.get('/protocolsInput', (request, response)=>{
    oids = ["1.3.6.1.2.1.4.3.0", "1.3.6.1.2.1.6.10.0", "1.3.6.1.2.1.7.1.0"]
 
    // Numero de datagramas que entraram no meu PC, do protocolo IP, TCP e UDP

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            response.send(varbinds);
        }
        session.close ();
    });
})

app.get('/protocols', (request, response)=>{
    oids = ["1.3.6.1.2.1.4.3.0", "1.3.6.1.2.1.6.10.0", "1.3.6.1.2.1.7.1.0","1.3.6.1.2.1.4.10.0", "1.3.6.1.2.1.6.11.0", "1.3.6.1.2.1.7.4.0"]
    // IPIN, TCPIN, UDPIN, IPOUT, TCPOUT, UDPOUT
    
    // Todos os Datagramas do Meu pc

    var session = snmp.createSession (ipDesejado, "public");
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error (error);
        }else{
            response.send(varbinds);
        }
        session.close ();
    });
})

app.listen({port: 5500}, ()=>{console.log('Server is running in port: 5500')})