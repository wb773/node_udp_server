var dgram = require('dgram');

//アドレス、ポートの設定
var port = 12345;
var host = '127.0.0.1';

//送信処理
var sendMessage = function(port){
    const dgram = require('dgram');
    const server = dgram.createSocket('udp4');
    
    server.send('Hello', port, '127.0.0.1', (err, bytes) => {
      console.log("SendMessageResult : " + err, bytes)
    });
}

//IPv4でソケット作成
var server = dgram.createSocket('udp4');

//エラー処理
server.on('error', (err) => {
    console.log(`Server Error:\n${err.stack}`);  
    server.close();
    });

//受け取ったメッセージを表示
server.on('message', (message, remote) => {
    console.log(`Received: ${message} from ${remote.address}:${remote.port}`);

    sendMessage(9998);

});

//リスナーの情報を表示
server.on('listening', () => {
    var address = server.address();
    console.log(`Listening on: ${address.address}:${address.port}`) 
});

//指定したポート、アドレスからメッセージを聞く
server.bind(port,host);


setInterval(function() {
    sendMessage(9999);
  }, 5000);