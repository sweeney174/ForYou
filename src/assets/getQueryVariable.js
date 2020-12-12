// export function GetRequest() {  
//   var url = location.search; //获取url中"?"符后的字串  
//   var theRequest = new Object();  
//   if (url.indexOf("?") != -1) {  
//      var str = url.substr(1);  
//      var strs = str.split("&");  
//      for(var i = 0; i < strs.length; i ++) {  
//         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
//      }  
//   }  
//   return theRequest;  
// }  

export function getQueryVariable (){
  const url=location.search;
console.log(url);
if(url.indexOf("?")!==-1){
  let str=url.substr(1);
  str = str.split("=")[1];
  str = decodeURIComponent(str);
  console.log(str);
  return str
}

}