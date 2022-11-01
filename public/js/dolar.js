pegarDolar()
async function pegarDolar() {
    var lista = []
    // firebase.firestore().collection('DADOS').doc('CAMBIO_DOLAR').collection('CAMBIO_DOLAR').doc('infos').collection('infos').get().then(snapshot => {
    //     console.log(snapshot)
    //     var dados = snapshot.docs.map(doc => doc.data())
    //     console.log(dados)
    // })
    // var documento = firebase.firestore().collection('DADOS').doc('CAMBIO_DOLAR').collection('CAMBIO_DOLAR').doc('infos')
    // documento.get().then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });

    firebase.firestore().collection('cambio_dolar3').where('ano', '==', 2020).where('mes', '==', 4).get().then(snapshot => {
        var dados = snapshot.docs.map(doc => doc.data())
        // console.log(dados)
        for (var i in dados) {
            var tupla = ([dados[i]['valor'], dados[i]['data']])
            lista.push(tupla)
        }
        // console.log(lista)
        return lista
    })
    // var response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json')
    // console.log(response)
    // const request = new XMLHttpRequest()

    // var resposta = request.open('GET', 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json')
    // console.log(resposta.body)
    //firebase.firestore().collection('cambio_dolar2').doc().set({})
}
