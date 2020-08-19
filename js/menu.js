$(document).ready(function(){ 
  
    $(".submenu").click(function(){ 
    $(this).children("ul").slideToggle(); 
    
    var Grupo = $(this).parent();
    var posicion = $(this).index();
    Grupo.children().each(function (index) {
     if (index != posicion)
      $(this).children("ul").slideUp("slow");
    });
   })
   
    $("ul").click(function(p){ 
    p.stopPropagation(); 
   });

   const btnSwitch = document.querySelector('#switch');
   btnSwitch.addEventListener('click',() => {
     document.body.classList.toggle('dark');
     btnSwitch.classList.toggle('active');
     // Guardando en modo LocalStorage.
     if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
     }else{
        localStorage.setItem('dark-mode', 'false');
     }
   }) 
   //Obtenemos el modo actual.
   if(localStorage.getItem('dark-mode') === 'true'){
      document.body.classList.add('dark');
      btnSwitch.classList.add('active');
   }else{
      document.body.classList.remove('dark'); 
      btnSwitch.classList.remove('active'); 
   }
})