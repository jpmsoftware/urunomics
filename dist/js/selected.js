window.onload = () => {
    // cargar session (selected opt)
    if (!sessionStorage.getItem('SelectedOpt')) {
        sessionStorage.setItem('SelectedOpt', 'index');
    }
    LoadInfo();
}

function LoadInfo() {
    // CARGAR ETIQUETAS
    var h2 = document.getElementsByTagName('h2')[0];
    var descripcion = document.getElementById('descripcion');
    var unidad = document.getElementById('unidad');
    var ultimo = document.getElementById('ult-dato');

    var selOpt = sessionStorage.getItem('SelectedOpt');

    switch (selOpt) {
        case 'pbi':
            h2.innerHTML = 'PBI';
            descripcion.innerHTML = 'El producto bruto interno expresa el total de la producción de bienes y servicios de un país durante un período determinado';
            unidad.innerHTML = 'Expresado en miles de millones de dólares';
            break;

        case 'pbi-interanual':
            h2.innerHTML = 'PBI, variación interanual';
            descripcion.innerHTML = 'Variación del PBI año a año';
            unidad.innerHTML = 'Expresado en porcentaje';
            break;

        case 'pbi-per-capita':
            h2.innerHTML = 'PBI per cápita';
            descripcion.innerHTML = 'El PBI per cápita es el resultado de dividir el PBI total de un territorio entre la cantidad de sus habitantes';
            unidad.innerHTML = 'Expresado en dólares por habitante';
            break;

        case 'inflacion':
            h2.innerHTML = 'Inflación';
            descripcion.innerHTML = 'La inflación es el aumento generalizado y sostenido de los precios de los bienes y servicios durante un período determinado';
            unidad.innerHTML = 'Expresado en porcentaje respecto al año anterior';
            break;

        case 'desempleo':
            descripcion.innerHTML = 'La tasa de desempleo se calcula como el número de personas desocupadas dividido entre la Población Económicamente Activa (Población en edad de trabajar)';
            unidad.innerHTML = 'Expresado en porcentaje respecto al año anterior';
            h2.innerHTML = 'Desempleo';
            break;
    }

    LoadChart(selOpt);
}

function LoadChart(selOpt) {
    // CARGAR JSON
    var labels = [];
    var values = [];
    fetch(`./data/${selOpt}.json`)
        .then((res) => res.json())
        .then((data) => {
            for (var i = 0; i < data.length; i++) {
                labels.push(data[i].label);
                values.push(data[i].value);
            }
            var ctx = document.getElementById('grafica').getContext('2d');
            var chart = new Chart(ctx, {
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
        })
}