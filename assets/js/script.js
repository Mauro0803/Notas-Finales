function ingresarnotas() {
    
    // Declaracion de variables
    var html1 = document.getElementById("html1");
    var html2 = document.getElementById("html2");
    var html3 = document.getElementById("html3");
    var promedio_html = document.getElementById("promedio_html");

    var css1 = document.getElementById("css1");
    var css2 = document.getElementById("css2");
    var css3 = document.getElementById("css3");
    var promedio_css = document.getElementById("promedio_css");

    var js1 = document.getElementById("js1");
    var js2 = document.getElementById("js2");
    var js3 = document.getElementById("js3");
    var promedio_js = document.getElementById("promedio_js");

    // Ingreso de notas
    html1.innerHTML = parseInt(prompt("Ingrese nota 1 [HTML]"));
    html2.innerHTML = parseInt(prompt("Ingrese nota 2 [HTML]"));
    html3.innerHTML = parseInt(prompt("Ingrese nota 3 [HTML]"));

    css1.innerHTML = parseInt(prompt("Ingrese nota 1 [CSS]"));
    css2.innerHTML = parseInt(prompt("Ingrese nota 2 [CSS]"));
    css3.innerHTML = parseInt(prompt("Ingrese nota 3 [CSS]"));

    js1.innerHTML = parseInt(prompt("Ingrese nota 1 [JS]"));
    js2.innerHTML = parseInt(prompt("Ingrese nota 2 [JS]"));
    js3.innerHTML = parseInt(prompt("Ingrese nota 3 [JS]"));


    // Calcular promedio
    promedio_html.innerHTML = (parseInt(html1.innerHTML) + parseInt(html2.innerHTML) + parseInt(html3.innerHTML)) /3;
    promedio_css.innerHTML = (parseInt(css1.innerHTML) + parseInt(css2.innerHTML) + parseInt(css3.innerHTML)) /3;
    promedio_js.innerHTML = (parseInt(js1.innerHTML) + parseInt(js2.innerHTML) + parseInt(js3.innerHTML)) /3;

}