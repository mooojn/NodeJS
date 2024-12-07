const sql = require('mssql');

var config = {
    server: 'DESKTOP-AJHCE58\\MOOOJN',
    database: 'Northwind',
    driver: 'tedious',
    options: {
        trustedConnection: true
    },
    connectionTimeout: 30000
};

sql.connect(config, (err) => {
    if (err)
        console.log('Error connecting to the database:', err);
    else
    {
        const req = new sql.Request();
        req.query('SELECT * FROM dbo.Customers', (err, res) => {
            if (err)     
                console.log('Error executing query:', err);
            else 
                console.log(res);
        })  
    }
});