const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const canciones = require('../listado.json');

//GET= se utiliza para obtener información del back-end y mostrarla en la interfaz de usuario
router.get('/', (req, res) => {
    res.json(canciones);
});

//POST= se utiliza para agregar una nueva información en el back-end
router.post('/', (req, res) => {
    const { canción, cantante, género, año } = req.body;
    if (canción && cantante && género && año){
        const id = canciones.length + 1;
        const nuevacancion = {...req.body, id};
        console.log(nuevacancion);
        canciones.push(nuevacancion);
        res.json(canciones);
    }else{
        res.send('Error');
    }
    res.send('Recibido');
});

//PUT= se utiliza para actualizar o reemplazar cualquier información existente
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { canción, cantante, género, año } = req.body;
    if (canción && cantante && género && año) {
        _.each(canciones, (cancion, i) => {
            if (cancion.id == id){
                cancion.canción = canción;
                cancion.cantante = cantante;
                cancion.género = género;
                cancion.año = año;
            }
        });
        res.json(canciones);
    }else{
        res.status(500).jason({error:'Hay un error.'});
    }
});

//DELETE= se utiliza para eliminar la información del back-end
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(canciones, (cancion, i ) => {
        if (cancion.id == id){
            canciones.splice(i, 1);
        }
    });
    res.send(canciones);
});

module.exports = router;