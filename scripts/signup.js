// Validar dados fo Formulário
function validar() {
    let dados = (/^[A-Za-z0-9_\-\,]+@[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    let password = (/^(?=.*?[A-Z])(?=.*?[a-z0-9])(?=.*?[!@#$&*?%-]).{8,}$/);
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    if (name == "") {
        alert("Empty name field!");
        return false;
    }
    // campo de e-mail vazio
    else if (email == "") {
        alert("Empty email field!");
        return false;
    }
    // validação do e-mail
    else if (!dados.test(email)) {
        alert("E-mail invalido! Ex: meu@gmail.com");
        return false;
    }
    // campo de senha vazio
    else if (pass == "") {
        alert("Empty password field!");
        return false;
    }
    // a senha deve ter no mínimo 8 caracteres
    // validação da senha
    else if (!password.test(pass)) {
        alert("Your password must contain 8 characters, consisting of uppercase, lowercase letters, numbers and symbols.");
        return false;
    }
    // retorna verdadeiro a função
    else {
        alert("The data has been sent!");
        return true;
    }
}

 
