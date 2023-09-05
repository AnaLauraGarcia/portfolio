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

const copyEmailButtonHeader = document.getElementById('copyEmailHeader');
const copiedEmailMessageHeader = document.getElementById('copiedEmailMessageHeader');
const emailIconHeader = document.getElementById('emailIcon');

copyEmailButtonHeader.addEventListener('click', function () {
    const email = 'analauragarcia.al@gmail.com'; 
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = email;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    copiedEmailMessageHeader.style.display = 'block';

    setTimeout(function () {
        copiedEmailMessageHeader.style.display = 'none';
    }, 2500); 
});

const copyEmailButtonFooter = document.getElementById('copyEmailFooter');
const copiedEmailMessageFooter = document.getElementById('copiedEmailMessageFooter');
const emailIconFooter = document.getElementById('emailIcon');

copyEmailButtonFooter.addEventListener('click', function () {
    const email = 'analauragarcia.al@gmail.com'; 
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = email;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    copiedEmailMessageFooter.style.display = 'block';

    setTimeout(function () {
        copiedEmailMessageFooter.style.display = 'none';
    }, 2500); 
});


const copyDiscordButtonHeader = document.getElementById('copyDiscordHeader');
const copiedDiscordMessageHeader = document.getElementById('copiedDiscordMessageHeader');
const discordIconHeader = document.getElementById('discordIcon');

copyDiscordButtonHeader.addEventListener('click', function () {
    const email = 'garcia.ana'; 
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = email;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    copiedDiscordMessageHeader.style.display = 'block';

    setTimeout(function () {
        copiedDiscordMessageHeader.style.display = 'none';
    }, 2500); 
});


const copyDiscordButtonFooter = document.getElementById('copyDiscordFooter');
const copiedDiscordMessageFooter = document.getElementById('copiedDiscordMessageFooter');
const discordIconFooter = document.getElementById('discordIcon');

copyDiscordButtonFooter.addEventListener('click', function () {
    const email = 'garcia.ana'; 
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = email;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    copiedDiscordMessageFooter.style.display = 'block';

    setTimeout(function () {
        copiedDiscordMessageFooter.style.display = 'none';
    }, 2500); 
});