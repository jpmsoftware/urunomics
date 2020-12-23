const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/:categoria/:indicador', (req, res) => {
    let path;
    let data;
    let obj;

    try {
        path = `./data/${req.params.categoria}/${req.params.indicador}.json`;
        data = require(path);
        obj = data;
        res.render('indicator', { data: obj });
    }
    catch (err) {
        res.end('Error en la ruta');
    }
});

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});