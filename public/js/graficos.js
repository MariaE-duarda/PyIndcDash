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
        //is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartPie);
function drawChartPie() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
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


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
        [dados_graph[0]['data'], parseFloat(dados_graph[0]['valor'])],
        [dados_graph[1]['data'], parseFloat(dados_graph[1]['valor'])],
        [dados_graph[2]['data'], parseFloat(dados_graph[2]['valor'])],
        [dados_graph[3]['data'], parseFloat(dados_graph[3]['valor'])]
    ]);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}

google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChartBar3);
function drawChartBar3() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" }],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.30, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"]
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
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}
