

function register() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    //firebase.firestore().collection('ATIVOSDERESERVA').get()
    console.log(email)
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
        console.log('Registrado com sucesso!')
    }).catch((error) => {
        console.log(error)
    })
}