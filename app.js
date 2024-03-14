const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize SQLite database
const db = new sqlite3.Database('phone_numbers.db');
db.run('CREATE TABLE IF NOT EXISTS phones (number TEXT UNIQUE)');
app.use(express.static('frontend'))
app.use(express.json());

// Calculate solar panel information
app.post('/calculate', (req, res) => {
    console.log(req.body)
    const { electricityBill, roofArea } = req.body;
    const numPanels = Math.ceil(electricityBill / 420);
    const requiredArea = numPanels * 2; // Each panel is 2m x 1m
    const capitalNeeded = numPanels * 60000 / 2;
    const breakevenYears = Math.ceil(capitalNeeded / (electricityBill * 12));
    const earnings25Years = 2500 * 12 * 25 - capitalNeeded; // Assumed constant earnings

    try{
        db.run('INSERT OR IGNORE INTO phones (number) VALUES (?)', req.body.phoneNumber);
    } catch(e){}

    res.json({
        electricityBill,
        roofArea,
        numPanels,
        requiredArea,
        capitalNeeded,
        breakevenYears,
        earnings25Years,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});