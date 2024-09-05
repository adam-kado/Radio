class Color{
constructor(){
 this.color1 = document.getElementById("color1");
 this.color1.addEventListener("click",()=>{

this.select_color("color1");

 });


 this.color2 = document.getElementById("color2");
 this.color2.addEventListener("click",()=>{
    
this.select_color("color2");

 }); 
 
 this.color3 = document.getElementById("color3");
 this.color3.addEventListener("click",()=>{
    
this.select_color("color3");

 }); 
 
 this.color4 = document.getElementById("color4");
 this.color4.addEventListener("click",()=>{
    
this.select_color("color4");

 });


   //ذلك عندما يقوم المستخدم بتحديث الصفحه يبقى بنفس  اللون localstorage
if(localStorage.getItem("COLOR")==null){
    document.body.style.background = "linear-gradient( to left , rgb(16, 15, 15) , rgb(71, 71, 109))";

}
this.select_color(localStorage.getItem("COLOR"));

}





select_color(color){

    if(color == "color1"){
document.body.style.background = "linear-gradient( to left , brown , blue)";
    }

 if(color == "color2"){
        document.body.style.background = " linear-gradient( to left , rgb(23, 22, 28) , rgb(28, 28, 228))";
 } 

if(color == "color3"){
 document.body.style.background = "linear-gradient( to left , rgb(36, 36, 36) , rgb(199, 243, 4))";
 }   

 if(color == "color4"){
 document.body.style.background = "linear-gradient( to left , rgb(16, 15, 15) , rgb(91, 91, 102))";
 }


  //ذلك عندما يقوم المستخدم بتحديث الصفحه يبقى بنفس  اللون localstorage

localStorage.setItem("COLOR", color);


}


}
onload = new Color();



























