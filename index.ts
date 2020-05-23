import * as express from 'express';
import * as fs from 'fs';
import * as https from 'https';
import * as mongoose from 'mongoose';
import { express as expressCfg, router } from './config';
require('dotenv/config');

const app = express();
expressCfg(app);
router(app);

/**
 * Для работы приложения требуется разместить файлы с сертификатом и ключом
 *  в папку sslCert
 */
const privateKey = fs.readFileSync('sslCert/certificate.key', 'utf8');
const certificate = fs.readFileSync('sslCert/certificate.cer', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

mongoose
  .connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to MongoDB');
  })
  .then(() => {
    httpsServer.listen(443, () => {
      console.log(`Listening on 443...`);
    });
  })
  .catch(() => console.log('Connection failed'));
