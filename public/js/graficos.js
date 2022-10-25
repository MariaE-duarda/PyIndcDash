var dados_graph = JSON.parse(localStorage.getItem('dados')) || {};
pegarDados()
async function pegarDados() {
    firebase.firestore().collection('DADOS').get().then(snapshot => {
        var dados = snapshot.docs.map(doc => doc.data())
        console.log(dados[0]['ATIVOSDERESERVA']['infos'])
        var dados_graph = []
        dados_graph.push(dados[0]['ATIVOSDERESERVA']['infos'][0])
        dados_graph.push(dados[0]['ATIVOSDERESERVA']['infos'][1])
        dados_graph.push(dados[0]['ATIVOSDERESERVA']['infos'][2])
        dados_graph.push(dados[0]['ATIVOSDERESERVA']['infos'][3])
        localStorage.setItem('dados', JSON.stringify(dados_graph));

    })
}
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    console.log('entrei')

    console.log(dados_graph)
    console.log(dados_graph[0]['data'])
    var data = google.visualization.arrayToDataTable([
        ['Data', 'Valor'],
        [dados_graph[0]['data'], dados_graph[0]['valor'] < 0 ? dados_graph[0]['valor'] * -1 : dados_graph[0]['valor']],
        [dados_graph[1]['data'], dados_graph[1]['valor'] < 0 ? dados_graph[1]['valor'] * -1 : dados_graph[1]['valor']],
        [dados_graph[2]['data'], dados_graph[2]['valor'] < 0 ? dados_graph[2]['valor'] * -1 : dados_graph[2]['valor']],
        [dados_graph[3]['data'], dados_graph[3]['valor'] < 0 ? dados_graph[3]['valor'] * -1 : dados_graph[3]['valor']],
    ]);

    var options = {
        title: 'Ativos de Reserva',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartBar);
function drawChartBar() {
    console.log('entrei')

    console.log(dados_graph)
    console.log(dados_graph[0]['data'])
    var data = google.visualization.arrayToDataTable([
        ["Data", "Valor", { role: "style" }],
        [dados_graph[0]['data'], parseFloat(dados_graph[0]['valor']), "#b87333"],
        [dados_graph[1]['data'], parseFloat(dados_graph[1]['valor']), "silver"],
        [dados_graph[2]['data'], parseFloat(dados_graph[2]['valor']), 'gold'],
        [dados_graph[3]['data'], parseFloat(dados_graph[3]['valor']), "color: #e5e4e2"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "Ativos de Reserva",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart"));
    chart.draw(view, options);

    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChartBar2);
function drawChartBar2() {
    console.log('entrei')

    console.log(dados_graph)
    console.log(dados_graph[0]['data'])
    var data = google.visualization.arrayToDataTable([
        ['year', '01/01', '01/02', '01/03', '01/04'],
        ['1995', parseFloat(dados_graph[0]['valor']), parseFloat(dados_graph[1]['valor']), parseFloat(dados_graph[2]['valor']), parseFloat(dados_graph[3]['valor'])],
    ]);

    var options = {
        chart: {
            title: 'Ativos de Reserva',
            subtitle: 'Ano de 1995, primeiro dia dos quatros primeiros meses',
        },
        bars: 'horizontal' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}