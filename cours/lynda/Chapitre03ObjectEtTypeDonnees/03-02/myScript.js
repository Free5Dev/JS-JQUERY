var a = 2;
var b = "7";

var aNum=Number(a);
var bNum=Number(b);
console.log(a+b);


if(isNaN(aNum) || isNaN(bNum))
{
    console.log("les deux ne sont pas des number");
}
else
{
    console.log(aNum+bNum);
}