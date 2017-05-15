// /**
//  * Created by Administrator on 2017/5/3.
//  */
var abc = [];
var xyz = [];
var title = "广告";

var str = "广告(广告3)=1, 广告(广告1)=4, 广告(广告4)=2,广播(广播1)=2,广播(广播3)=2,广播(广播4)=2,微信(微信1)=3,微信(微信2)=2,微信(微信3)=1";
var regex="\\((.+?)\\)";
strs = str.split(",");
console.log(strs);
for(var i = 0; i < strs.length; i++) {
    if (strs[i].indexOf(title) >= 0) {
        abc.push(strs[i]);
    }
 }
for(var i = 0; i < abc.length; i++) {
    var _index = abc[i].lastIndexOf("=");
    var _val = abc[i].substring(_index + 1);
    xyz.push(_val);
}
console.log(xyz);
var keyArr = [];
var keyArrMatch = [];
for (var i = 0; i < strs.length; i++) {
    strs[i] = [strs[i]];
    var key = new Array();
    key[i] = strs[i][0].match(regex);
    var guanggao = [key[i][1]];
    keyArr.push(guanggao[0]);
    var val = key[i][1].match(/\d+(\.\d+)?/g);
}
console.log(keyArr);
// for(var j = 0 ;j < keyArr.length; j++) {
//      keyArrMatch.push(keyArr[j].match(/广告[0-9]/g));
//       if(keyArrMatch[j] == " " ||keyArrMatch[j]==null|| typeof(keyArrMatch[j]) == "undefined") {
//           keyArrMatch.splice(j,1);
//           j= j-1;
//       }
// }
// console.log(keyArrMatch);
for (var i = 0; i < keyArr.length; i++) {
    if(keyArr[i].indexOf(title) >= 0) {
        keyArrMatch.push(keyArr[i]);
    }
}
console.log(keyArrMatch);



var title = "微信"; //一级标题
var str = "{广告(广告3)=12,广告(广告1)=22,微信(微信3)=3,微信(微信1)=4}";
var str2 = str.substr(1, str.length - 2);
console.log(str2);
var str3 = str2.split(",");
console.log(str3);
var key = [];
var val = [];
var str4 = [];

for(var i = 0; i < str3.length; i++){
    if(str3[i].indexOf(title) >= 0){
        str4.push(str3[i]);
    }
}
console.log(str4);
for(var i = 0; i < str4.length; i++){
    var _index = str4[i].lastIndexOf("=");
    var _val = str4[i].substring(_index + 1);
    val.push(_val);

    var _key = str4[i].substring(str4[i].indexOf("(") + 1, str4[i].indexOf(")"));
    key.push(_key);
}

console.log(key);
console.log(val);