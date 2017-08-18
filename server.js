//git remote add origin https://github.com/cybermyv/node-server-example.git

import express from 'express';
import bodyParser from 'body-parser';
import './dbengine';


const app = express();
const path = __dirname + './../Client';

app.use(express.static(path));


app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', async(req, res) => {

    res.sendfile('index.html');
    // res.redirect('/_api/list')
});


app.get('/list', async(req, res) => {
    console.log('/_api/list');
    // try {
    //     // const list = await dbEngine.all('SELECT * FROM AROMA');
    //     //console.log(list);
    //     // res.send(list);

    //     console.log('/list');
    //     return dbEngine.readAllAromas((err, recs) => {
    //         if (!err) {
    //             console.log('return');
    //             return res.json(recs);
    //         }
    //     })

    // } catch (err) {
    //     next(err)
    // }
});


app.listen(8080, err => {
    if (err) throw err;
    console.log('Сервер стартовал по адресу: http://localhost:8080');
});