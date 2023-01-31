function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin" ){
        alert('Cadastro Feito com sucesso');
        location.href = "indexInicial.html"
    }else{
        alert('usuario ou senha incorretos')
    }

}