//window.localStorage.setItem("Nome", "João");
//window.localStorage.getItem("Nome");

function adicionarNota() {

    var notas = JSON.parse(window.localStorage.getItem("notas")); //converte string para objeto
    var titulo = document.getElementById("notaTitulo").value;
    var descricao = document.getElementById("notaDescricao").value;

    if (notas===null)
        notas ={titulo:descricao};
    else
        notas[titulo]=descricao;
    window.localStorage.setItem("notas",JSON.stringify(notas));  //converte string para objeto processo invertido
    document.location.href = 'verNotas.html';
}

function preencheNotas(){
    var notas = JSON.parse(window.localStorage.getItem("notas"));
    for(nota in notas){
        str='';
        str+='<div class ="nota" onclick = "verNota(\'' + nota+ '\');">';
        str+= '<div class ="titulo">'  + nota + '</div>';
        str+='<div class = descricao>' + notas[nota].substring(0,20)+ '(...) </div>';
        str+='</div>';
        document.getElementById("notas").innerHTML + =str;
     }
}
