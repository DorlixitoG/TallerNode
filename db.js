const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/soft_shirt';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log("Conectado a MongoDB!")
});
module.exports =db