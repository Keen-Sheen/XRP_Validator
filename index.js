const cliant = require('rippled-ws-cliant')

 new cliant('wss://fh.xrpl.ws').then(connection => (
     console.log('connected')

    connection.send({
        command: 'account_info',
        account:'rPEPPER7kfTD9w2To4CQk6UCfuHM9c66DY'
    }).then(reply => {
        console.log('Got answer form node')
        console.log(reply.account_data.Balance)
        connection.close()
    })
 ))