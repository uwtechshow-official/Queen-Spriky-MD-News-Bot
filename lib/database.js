function _0x2dbe(_0x4710a3,_0x5e0a8c){const _0x5232be=_0x5232();return _0x2dbe=function(_0x2dbe56,_0x23d07f){_0x2dbe56=_0x2dbe56-0x8f;let _0x44ca3b=_0x5232be[_0x2dbe56];return _0x44ca3b;},_0x2dbe(_0x4710a3,_0x5e0a8c);}function _0x5232(){const _0x48cf71=['log','810644xvADhr','660667paaEPR','4vfvqJa','18rkVSci','findOneAndUpdate','2405736nVzWsX','value','\x20not\x20found','forEach','2570150eDjRUw','305253ktumcA','436362oGNlEA','Error\x20retrieving\x20environment\x20variables:','628695thiNHY','12LlUAIT','\x20to\x20','Error\x20updating\x20environment\x20variable:','find','message'];_0x5232=function(){return _0x48cf71;};return _0x5232();}(function(_0x1b68b9,_0x12feaa){const _0x52b7a5=_0x2dbe,_0x238201=_0x1b68b9();while(!![]){try{const _0x58fe1f=parseInt(_0x52b7a5(0x91))/0x1+parseInt(_0x52b7a5(0x9d))/0x2*(-parseInt(_0x52b7a5(0x92))/0x3)+parseInt(_0x52b7a5(0x9b))/0x4+parseInt(_0x52b7a5(0x94))/0x5*(parseInt(_0x52b7a5(0x95))/0x6)+-parseInt(_0x52b7a5(0x9c))/0x7+parseInt(_0x52b7a5(0xa0))/0x8+-parseInt(_0x52b7a5(0x9e))/0x9*(parseInt(_0x52b7a5(0x90))/0xa);if(_0x58fe1f===_0x12feaa)break;else _0x238201['push'](_0x238201['shift']());}catch(_0x38cd1c){_0x238201['push'](_0x238201['shift']());}}}(_0x5232,0x27416));const EnvVar=require('./mongodbenv'),readEnv=async()=>{const _0x59b620=_0x2dbe;try{const _0x565e6e=await EnvVar[_0x59b620(0x98)]({}),_0x46bc5d={};return _0x565e6e[_0x59b620(0x8f)](_0x5872c9=>{const _0x12d295=_0x59b620;_0x46bc5d[_0x5872c9['key']]=_0x5872c9[_0x12d295(0xa1)];}),_0x46bc5d;}catch(_0x4ed96a){console['error'](_0x59b620(0x93)+_0x4ed96a[_0x59b620(0x99)]);throw _0x4ed96a;}},updateEnv=async(_0x2d3815,_0x475e31)=>{const _0x14a1ea=_0x2dbe;try{const _0x1488f4=await EnvVar[_0x14a1ea(0x9f)]({'key':_0x2d3815},{'value':_0x475e31},{'new':!![],'upsert':!![]});_0x1488f4?console[_0x14a1ea(0x9a)]('Updated\x20'+_0x2d3815+_0x14a1ea(0x96)+_0x475e31):console['log']('Environment\x20variable\x20'+_0x2d3815+_0x14a1ea(0xa2));}catch(_0x165b78){console['error'](_0x14a1ea(0x97)+_0x165b78[_0x14a1ea(0x99)]);throw _0x165b78;}};module['exports']={'readEnv':readEnv,'updateEnv':updateEnv};