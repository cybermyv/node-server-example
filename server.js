//git remote add origin https://github.com/cybermyv/node-server-example.git

import express from 'express';
import bodyParser from 'body-parser';
import dbEngine from './dbengine';


const app = express();
app.use(express.static(__dirname + './../Client/'));


app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    //  res.end('default route ...');
    res.sendfile('index.html');
});

app.get('/list', async(req, res, next) => {
    try {
        const list = await dbEngine.all('SELECT * FROM AROMA');
        console.log(list);

        res.send(list);
    } catch (err) {
        next(err)
    }
});


app.listen(8080, err => {
    if (err) throw err;
    console.log('Сервер стартовал по адресу: http://localhost:8080');
});