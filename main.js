function displayADD() {
    document.querySelector("#banner")
        .classList.add("display");
}

function HTML5ADD() {
    document.getElementById("content").innerHTML = "<div id='banner2'><div id='text2'><h2>Quais são as minhas habilidades ?</h2><p>Assim como todo programador de desenvolvimento web precisa saber, possuo profundo conhecimento em <strong>HTML5</strong>, sendo capaz de fazer qualquer execução em <strong>HTML5</strong>.</p></div><div id='imageHTML5'><img src='imagens/HTML5.ico' alt='HTML5'></div></div>";
}

function showHTML5() {
    document.querySelector("#banner2")
        .classList.add("display")  ;
    document.querySelector("#nav")
        .classList.add("display");
}

function MEHTML5() {
    document.querySelector("#banner2")
        .classList.remove("display");
    document.querySelector("#nav")
        .classList.remove("display");
}

function CSS3ADD() {
    document.getElementById("content").innerHTML = "<div id='banner3'><div id='text3'><h2>Quais são as minhas habilidades ?</h2><p>Possuo amplo conhecimento em <strong>CSS3</strong>, podendo trazer além de <strong>beleza</strong> e <strong>modernidade</strong> as aplicações também a <strong>RESPONSIVIDADE</strong>, aumentando o alcanse das aplicações para tablets e celulares.</p></div><div id='imageCSS3'><img src='imagens/CSS3_logo.ico' alt='css3Logo'></div></div>";
}

function showCSS3() {
    document.querySelector("#banner3")
        .classList.add("display");
    document.querySelector("#nav")
        .classList.add("display2");
}

function MECSS3() {
    document.querySelector("#banner3")
        .classList.remove("display");
    document.querySelector("#nav")
        .classList.remove("display2");
}

function PYTHONADD(){
    document.getElementById("content").innerHTML = "<div id='banner4'><div id='text4'><h2>Quais são as minhas habilidades ?</h2><p>Além do Front-End, também possuo conhecimento no <strong>Back-End</strong> de uma aplicação com <strong>Python</strong> utilizando o <strong>Framework Django</strong> juntamente a um banco de dados.</p></div><div id='imagePYTHON'><img src='imagens/PYTHON.png' alt='PYTHONLogo'></div></div>";
}

function showPYTHON() {
    document.querySelector("#banner4")
        .classList.add("display");
    document.querySelector("#nav")
        .classList.add("display3");
}

function MEPYTHON() {
    document.querySelector("#banner4")
        .classList.remove("display");
    document.querySelector("#nav")
        .classList.remove("display3");
}

function JSADD() {
    document.getElementById("content").innerHTML = "<div id='banner5'><div id='text5'><h2>Quais são as minhas habilidades ?</h2><h3>EM BREVE !</h3></div><div id='imageJS'><img src='imagens/JAVASCRIPT.png' alt='JS.logo'></div></div>";
}

function showJS() {
    document.querySelector("#banner5")
        .classList.add("display")
    document.querySelector("nav")
        .classList.add("display4")
        
}

function MEJS() {
    document.querySelector("#banner5")
        .classList.remove("display")
    document.querySelector("#nav")
        .classList.remove("display4")
}

function GITADD() {
    document.getElementById("content").innerHTML = "<div id='banner6'><div id='text6'><h2>Quais são as minhas habilidades ?</h2><p>Possuo conhecimento em <strong>Git</strong> e <strong>GitHub</strong>, podendo ter controle sobre as <strong>Versões da Aplicação Web</strong>, seja subindo um projeto, atualizando ou resolvendo algum bug.</p></div><div id='imageGIT'><img src='imagens/GIT.png' alt='GIT.logo'></div></div>";
}

function showGIT() {
    document.querySelector("#banner6")
        .classList.add("display");
    document.querySelector("#nav")
        .classList.add("display5");
}

function MEGIT() {
    document.querySelector("#banner6")
        .classList.remove("display");
    document.querySelector("#nav")
        .classList.remove("display5");
}

function OHADD() {
    document.getElementById("content").innerHTML = "<div id='banner7'><div id='text7'><h2>Habilidades Adicionais :</h2><p>Além de saber o necessário para desenvolver uma aplicação web, possuo conhecimento adicional ao meu curriculo, sendo eles:<br>Automoção de tarefas repetitivas e manipulação de dados em Python;<br>Criatividade em desenvolver projetos e facilidade para trabalhar em equipe.</p></div><div id='imageOH'><img src='imagens/OUTROS.png' alt='Outras Habilidades'></div></div>";
}

function showOH() {
    document.querySelector("#banner7")
        .classList.add("display");
    document.querySelector("#nav")
        .classList.add("display6");
}

function MEOH() {
    document.querySelector("#banner7")
        .classList.remove("display");
    document.querySelector("#nav")
        .classList.remove("display6");
}

function ME(){
    document.querySelector("#banner")
        .classList.remove("display");
}



