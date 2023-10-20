$(document).ready(function() {
    const vista = document.getElementById("view");
    const skill = document.querySelectorAll('.skill span');
    const root = document.documentElement;
    let fondo_normal=true;
    /*CAMBIAR COLOR FONDO*/
    vista.addEventListener("click",() =>{
        if(fondo_normal){
            root.style.setProperty('--ColPRIM_F', '#222222');
            root.style.setProperty('--CoLPRIM', '#222222');
            root.style.setProperty('--ColPRIM_S', '#4e4e4e');
            vista.style.transform='rotate(180deg)';
           skill.forEach(function(skill){
            skill.style.color='#EEEEEE';
           });
        }else{
            root.style.setProperty('--ColPRIM_F', '#053B50');
            root.style.setProperty('--CoLPRIM', '#176B87');
            root.style.setProperty('--ColPRIM_S', '#64CCC5');
            vista.style.transform='rotate(360deg)';
            skill.forEach(function(skill){
                skill.style.color='#176B87';
               });
            
        }
        
    fondo_normal = !fondo_normal;    
    });
    /*=================================*/
    /*INSERTANDO ETIQUETAS POR CADA MEDIA*/
    window.addEventListener('load',etiquetaFantasma);
    window.addEventListener('resize',etiquetaFantasma);
    function etiquetaFantasma(){
        const etq_fants=document.querySelectorAll('#etq_fants');
    /*ANCHO DE VENTANA*/
    etq_fants.forEach(function(etq_fants){
        const ancho=window.innerWidth;
        if(ancho<=1023){
            etq_fants.style.display='block';
        }
        else{
            etq_fants.style.display='none';
        }
       });
    }
    
});