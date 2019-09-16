// javascript

//TO DO: Awesome code to handle interactions goes here...
var cont_sidebar = document.getElementById("cont_sidebar");
var btn_settings = document.getElementById("btn_settings");

console.log(cont_sidebar);
console.log(btn_settings);

btn_settings.addEventListener('click',function(){
    cont_sidebar.classList.toggle("active");
});
cont_sidebar.addEventListener('dblclick',function(){
    cont_sidebar.classList.toggle("active");
});
