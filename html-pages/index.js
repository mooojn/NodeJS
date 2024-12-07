    const express = require('express');
    const path = require('path');

    const app = express();
    const htmlPagesPath = path.join(__dirname, '/public');

    app.use(express.static(htmlPagesPath))

    app.listen(4500);