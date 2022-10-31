firebase.auth().onAuthStateChanged(function(user){
    if(user){
        window.location.href = 'main.html';
    }
})

function login() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((_) => {
            window.location.replace('main.html')

        })
        .catch((error) => {
            console.log('error', error.code)

        });
}