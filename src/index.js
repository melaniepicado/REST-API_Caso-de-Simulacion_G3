const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings (Ajustes) 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares (Programas intermedios)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes (Rutas)
app.use('/api/musica',require('./routes/musica'));

//Starting the server (Iniciando el servidor)
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})