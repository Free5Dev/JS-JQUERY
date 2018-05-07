var today=new Date();
var otherDay=new Date(1991,10,22);
var lastDay=new Date(1991,10,22);
// 
console.log(today);
console.log(otherDay);

if(otherDay.getTime()==lastDay.getTime())
{
    console.log("Date  égales");
}
else
{
    console.log("Date non égales");
}