var aa = 1,a=1;
while(aa<=10)
{
    console.log(aa);
    aa++;
}
// meme chose avec do while
console.log("-----------------fin d boucle----------------------------------");
do
{
    if(a===5) continue;
    console.log(a);
    a++;
}

while(a<=10);
console.log("---------------------------------------------------");
// meme chose avec for
for(i=1;i<=10;i++){
    if(i===5) break;
    console.log(i);
}