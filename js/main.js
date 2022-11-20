
// var row =document.querySelector(".row")
// var  arrayData=[];
// var  recipesArray=[];
// var meals="";
// var items =document.querySelectorAll("a");
// for(var i=0  ; i<items.length; i++){
// items[i].addEventListener("click" , function(e){
//   meals=e.target.innerHTML;
//   reasponse(meals)
//   console.log(meals)
// })
// }

// function reasponse(reciepes){
// var httpRequest=new XMLHttpRequest();
// httpRequest.open("GET" ,`https://forkify-api.herokuapp.com/api/search?q=${reciepes}`);
// httpRequest.send();
// httpRequest.addEventListener("readystatechange" ,function(){
//         if(httpRequest.readyState==4){
//            arrayData=JSON.parse(httpRequest.response);
//           recipesArray=arrayData.recipes
//            console.log(recipesArray)
            
//           displayArray()
//         }
//     })}
//     function displayArray(){
//        cartonaa="";
//        for(var i=0 ; i<recipesArray.length ;i++){
//
//        }
//        row.innerHTML=cartonaa; 
//     }






var row =document.querySelector(".row")
var meals="";
var items =document.querySelectorAll("a");
for(var i=0  ; i<items.length; i++){
items[i].addEventListener("click" , function(e){
  meals=e.target.innerHTML;
  showReceipes(meals)
 
})
}

var arrayRecepices=[];
function showReceipes(meals){
var httpRequest =new XMLHttpRequest();
httpRequest.open("GET" ,`https://forkify-api.herokuapp.com/api/search?q=${meals}`)
httpRequest.send();
httpRequest.addEventListener("readystatechange" ,function(){
   if(httpRequest.readyState==4 && httpRequest.status==200){
      arrayRecepices=JSON.parse(httpRequest.response).recipes;
   }
   var cartonaa="";
   for(var i=0 ;i<arrayRecepices.length ; i++){
      cartonaa+=`<div class="col-md-3">
      <div class="item">
        <img class="w-100 h-75" src="${arrayRecepices[i].image_url}" alt="">
      <h2>
      "${arrayRecepices[i].title}"
      </h2>
      
      </div>
        </div>`
   }
   document.querySelector(".row").innerHTML=cartonaa;
}
)
}