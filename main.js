
var i=prompt("enter the number");
var n=prompt("enter the s number");
 let sum=0; 
 
var aveg;
 function naturalno(){
 for(i=1;i<=n;i++){
    document.write(i+"<br>");
    sum=sum+i;
    aveg=sum/n;
 }
 document.write("The sum of given natural number is : "+sum+"<br>");
 document.write("The average of given natural number is: "+aveg);
 //return aveg;
}
naturalno();

//var result=(naturalno());
//document.write(result);