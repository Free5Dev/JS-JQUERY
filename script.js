// var req = new XMLHttpRequest();

// req.onreadystatechange = function(event) {
//     // XMLHttpRequest.DONE === 4
//     if (this.readyState === XMLHttpRequest.DONE) {
//         if (this.status === 200) {
//            var goodObject=parseJson(JSON.parse(this.responseText)[0]);
//            console.log(goodObject);
//         } else {
//             console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
//         }
//     }
// };

// req.open('GET', 'http://localhost/json/user.json'); 
// req.send(null);

// function parseJson(object){
//     for (var key in object) {
//         if (object.hasOwnProperty(key)) {
//             var value = object[key];
            
//             switch(true){
//                 case value==="true" || value=="false":
//                     object[key]= value==='false';
//                     break;
//                 case /\d/.test[value]:
//                     object[key]=parseInt(value);
//                     break;
//             }
//         }
//     }
// }
var form=$("#userForm");

var url="http://localhost/json/user.json";

var getOption={
    method: 'POST',
    async: true,
    cache: false,
    success: successCallback
};

var successCallback = function (response){
    console.log(response);
}


// $.get(url, successCallback);
// $.ajax(url,getOption);


form.on('submit', function(e){
    e.preventDefault();
    getOption.data=$(this).serialize();
    $.ajax(url, getOption);
});