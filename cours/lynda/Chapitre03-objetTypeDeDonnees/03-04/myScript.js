var today;
var toDay=new Date(2016,02,03);
var otherDay=new Date(2016,02,03);
otherDay.setMonth(5);
console.log(otherDay);
if(toDay.getTime()==otherDay.getTime())
{
    console.log("Dates égales");
}

