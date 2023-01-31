function enviar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin" ){
        alert('Cadastro Feito com sucesso');
        location.href = "index.html"
    }else{
        alert('usuario ou senha incorretos')
    }

}