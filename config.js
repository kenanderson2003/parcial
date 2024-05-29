// config.js

module.exports = {
    secret: 'tu_clave_secreta_aqui', // Esta es la clave secreta para firmar y verificar los tokens JWT
    port: process.env.PORT || 3000 // Puerto en el que se ejecutará el servidor, utiliza el puerto proporcionado por el entorno o el puerto 3000 si no está definido
  };
  