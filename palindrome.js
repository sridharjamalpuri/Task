function palindrome(str){

var a="";
var b="";
for(var i=0;i<str.length;i++)
    {
       a = str[i];
   }
for(var j=str.length;j>=0;j--)  
  {
  b = str[j];
  }
if(a==b)
 {
console.log("it is a palindrome");
  }else {
console.log("it is not a palindrome");
}
};
palindrome("sridhar");
