//git remote add origin https://github.com/cybermyv/node-server-example.git
import express from 'express';
import bodyParser from 'body-parser';
import dbEngine from './dbengine';


const app = express();
app.use(express.static(__dirname));


app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', async(req, res) => {
    res.end('default route ...');
    //  res.sendfile('./views/index.html');
});

app.listen(8080, err => {
    if (err) throw err;
    console.log('Сервер стартовал по адресу: http://localhost:8080');
});