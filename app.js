const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./public/assets/js/config');

const app = express();  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/user', (req, res, next) => {
  console.log('Paso por aqui');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/tienda', (req, res) => {
  res.sendFile(__dirname + '/public/shop.html');
});

app.get('/producto-seleccionado', (req, res) => {
  res.sendFile(__dirname + '/public/shop-single.html');
});

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.post('/signup', (req, res) => {
  console.log(`Post pagina de registro ${req.body.name}`);
  console.log(`Post pagina de password ${req.body.email}`);

  if (`${req.body.name}` === 'Ken Cansaya' && `${req.body.email}` === 'kencansaya1332@gmail.com') {
    console.log(`Nombre: ${req.body.name}, Email: ${req.body.email}`);
    const user = {
      nombre: `${req.body.name}`,
      email: `${req.body.email}`,
    };

    jwt.sign({ user: user }, config.secret, { expiresIn: '200s' }, (err, token) => {
      res.json({ token: token });
    });
  } else {
    return res.status(401).json({
      auth: false,
      message: 'Usted no ha proveido un token valido',
    });
  }
});

app.post('/signin', verifyToken, (req, res) => {
  console.log(`Post pagina de contact ${req.body.name}`);
  console.log(`Post pagina de contact ${req.body.email}`);

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        mensaje: 'Contacto logueado por post',
        authData: authData,
      });
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(401);
    next();
  }
}

app.use(express.static('public'))
app.listen(config.port, () => {
  console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000`)
});
