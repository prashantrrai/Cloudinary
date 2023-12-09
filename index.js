const express = require('express');
require('dotenv').config();
require('./src/db/db.connection')

const app = express();
const PORT = process.env.PORT || 4040;