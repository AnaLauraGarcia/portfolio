let visibleMenu = false;
//Función que oculta o muestra el menu
function showHideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        visibleMenu = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}
//Funcion que aplica las animaciones de las skills
function skillsEffects(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("htmlcss");
        skills[1].classList.add("python");
        skills[2].classList.add("javascript");
        skills[3].classList.add("php");
        skills[4].classList.add("database");
        skills[5].classList.add("leadership");
        skills[6].classList.add("project-management");
        skills[7].classList.add("time-management");
        skills[8].classList.add("effective-communication");
        skills[9].classList.add("adaptability");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    skillsEffects();
} 