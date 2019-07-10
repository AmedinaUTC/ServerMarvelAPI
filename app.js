//Librerias Requeridas
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');

//Creación de la aplicación
const app = express();

//Conexión a BD mongodb
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB.');
});

//Puerto para servicio
app.set('port', process.env.PORT || 8090);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Modulos de aplicación
app.use('/api/characters', require('./api/characters'));

//Página de error default para recursos no encontrados
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});



//Inicia servicio escuchando en el puerto especificado
app.listen(app.get('port'), 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening on port ' + app.get('port'));
});

module.exports = app;
