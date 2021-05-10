// Validação de Email e Senha
function enviar() {
    let dados = (/^[A-Za-z0-9_\-\,]+@[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    console.log(email);
    console.log(pass);

    // 
    if (email == "") {
        alert("Empty email field!");
        return false;
    }
    else if (!dados.test(email)) {
        alert("E-mail invalido! Ex: meu@gmail.com");
        return false;
    }
    else if (pass == "") {
        alert("Empty password field!");
        return false;
    }
    else {
        alert("The data has been sent!");
        return true;
    }
}

