var email = document.getElementById('email').value
var senha = document.getElementById('senha').value
function login() {

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((_) => {
            console.log('Login feito com sucesso')
        })
        .catch((error) => {
            console.log('error', error.code)
        });
}

function register() {

    firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
        console.log('Registrado com sucesso!')
    }).catch((error) => {
        console.log(error)
    })
}