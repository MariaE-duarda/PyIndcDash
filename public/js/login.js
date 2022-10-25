function login() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((_) => {
            console.log('Login feito com sucesso')

        })
        .catch((error) => {
            console.log('error', error.code)
        });
}

