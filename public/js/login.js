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
pegarDados();
async function pegarDados() {
    firebase.firestore().collection().get().then(snapshot => {
        var dados = snapshot.docs.map(doc => doc.data())
        console.log(dados)
    })

    // firebase.firestore().collection('ATIVOSDERESERVA').get().then(snapshot => {
    //     console.log('snap')
    //     console.log(snapshot)
    //     var dados = snapshot.docs.map(doc => doc.data())
    //     console.log(dados)
    // })
}
