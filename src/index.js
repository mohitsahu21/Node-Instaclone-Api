
const mongoose = require('mongoose');
const port = 4000
const app = require('./app');
mongoose.connect('mongodb+srv://mohitsahu1993:mohitsahu21@cluster0.datnyml.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));



