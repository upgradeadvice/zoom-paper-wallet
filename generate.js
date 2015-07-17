var bitcore = require('bitcore');
var zoom = {
  name: 'ZoomNetwork',
  pubkeyhash: 103,
  privatekey: 231,
  scripthash: 92,
  networkMagic: 0xfbbfa54a,
  port: 26888,
  dnsSeeds: [
    'zoomcoin.co'
  ]
};

var PublicKey = bitcore.PublicKey;
var PrivateKey = bitcore.PrivateKey;
var Address = bitcore.Address;
var Script = bitcore.Script;
var Networks = bitcore.Networks;
Networks.add(zoom);
var ienetwork = Networks.get('ZoomNetwork');

var privateKey = new PrivateKey(null, ienetwork);
var privWif = privateKey.toWIF();
var address = privateKey.toAddress();
var addrstr = address.toString();

document.getElementById('address').innerHTML = addrstr;
document.getElementById('prvkey').innerHTML = privWif;

var qrcodedraw = new QRCodeLib.QRCodeDraw();

qrcodedraw.draw(document.getElementById('addressQR'),addrstr, function(error,canvas){
  if(error){
     return console.log('Error =( ',error);
  }
  console.log('addressQR generated');
});
qrcodedraw.draw(document.getElementById('prvkeyQR'),privWif, function(error,canvas){
  if(error){
     return console.log('Error =( ',error);
  }
  console.log('prvkeyQR generated');
});
