var ctx = document.getElementById('grafica').getContext('2d');
var char;

var labels = [];
var values = [];
var labelsTemp = ['1960', '1961', '1963']

GetData();

function GetData() {
    fetch('./data/pbi.json')
        .then((res) => res.json())
        .then((data) => {
            for (var i = 0; i < data.length; i++) {
                labels.push(data[i].label);
                values.push(data[i].value);
            }
            LoadChart();
        })
}

function LoadChart() {
    char = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                borderColor: 'rgb(27, 132, 172)',
                backgroundColor: 'rgba(27, 132, 172, .5)',
                data: values
            }]
        },
        options: {
            elements: {
                point: { radius: 4 }
            },
            legend: { display: false },
            responsive: false
        }
    })
}
