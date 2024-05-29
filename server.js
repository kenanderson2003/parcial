const app = require('./app');
const config = require('./assets/js/config');


app.listen(config.port, () => {
  console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:${config.port}`);
});
