/*
 _____                         _____            _ _            _   _                    ______       _   
|  _  |                       /  ___|          (_) |          | \ | |                   | ___ \     | |  
| | | |_   _  ___  ___ _ __   \ `--. _ __  _ __ _| | ___   _  |  \| | _____      _____  | |_/ / ___ | |_ 
| | | | | | |/ _ \/ _ \ '_ \   `--. \ '_ \| '__| | |/ / | | | | . ` |/ _ \ \ /\ / / __| | ___ \/ _ \| __|
\ \/' / |_| |  __/  __/ | | | /\__/ / |_) | |  | |   <| |_| | | |\  |  __/\ V  V /\__ \ | |_/ / (_) | |_ 
 \_/\_\\__,_|\___|\___|_| |_| \____/| .__/|_|  |_|_|\_\\__, | \_| \_/\___| \_/\_/ |___/ \____/ \___/ \__|
                                    | |                 __/ |                                            
                                    |_|                |___/                                             
Project Name : Queen Spriky MD News Bot
Developer : Udavin
Version : 1.0
*/

const _0x3aa5fd=_0x58e2;(function(_0x34a46c,_0x154c59){const _0x5791c2=_0x58e2,_0x3d6e94=_0x34a46c();while(!![]){try{const _0xa58a04=-parseInt(_0x5791c2(0x17d))/0x1*(parseInt(_0x5791c2(0x17c))/0x2)+parseInt(_0x5791c2(0x173))/0x3*(-parseInt(_0x5791c2(0x174))/0x4)+parseInt(_0x5791c2(0x179))/0x5+parseInt(_0x5791c2(0x17f))/0x6*(parseInt(_0x5791c2(0x172))/0x7)+parseInt(_0x5791c2(0x17a))/0x8*(-parseInt(_0x5791c2(0x175))/0x9)+parseInt(_0x5791c2(0x177))/0xa+-parseInt(_0x5791c2(0x176))/0xb;if(_0xa58a04===_0x154c59)break;else _0x3d6e94['push'](_0x3d6e94['shift']());}catch(_0x58f73a){_0x3d6e94['push'](_0x3d6e94['shift']());}}}(_0x2816,0xa9605));function _0x58e2(_0x148e51,_0x4eef24){const _0x28164d=_0x2816();return _0x58e2=function(_0x58e235,_0xc9508f){_0x58e235=_0x58e235-0x171;let _0x73e5ba=_0x28164d[_0x58e235];return _0x73e5ba;},_0x58e2(_0x148e51,_0x4eef24);}function _0x2816(){const _0x16cc6b=['274156qxwefi','1IJxKnF','model','192pNEBjB','ActiveGroup','248731ShEPfD','747309DjakHF','8ljIIPr','5331393OYbKKX','183282Illgen','13620360fviALb','EnvVar','156865errSiW','16zTZRrr','exports'];_0x2816=function(){return _0x16cc6b;};return _0x2816();}const mongoose=require('mongoose'),envVarSchema=new mongoose['Schema']({'key':{'type':String,'required':!![],'unique':!![]},'value':{'type':String,'required':!![]}}),activeGroupSchema=new mongoose['Schema']({'groupId':{'type':String,'required':!![],'unique':!![]},'lastNewsTitles':{'type':[String],'default':[]}}),ActiveGroup=mongoose[_0x3aa5fd(0x17e)](_0x3aa5fd(0x171),activeGroupSchema),EnvVar=mongoose[_0x3aa5fd(0x17e)](_0x3aa5fd(0x178),envVarSchema);module[_0x3aa5fd(0x17b)]=EnvVar,ActiveGroup;
