const express = require('express');
const path = require('path');
const geoip = require('geoip-lite'); // Added local IP database

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' })); // Increased limit for large CSVs
app.use(express.static(path.join(__dirname, 'public')));

// New instantaneous local geocoding route
app.post('/api/geocode', (req, res) => {
    try {
        const ips = req.body; // Array of IPs
        
        const results = ips.map(ip => {
            const geo = geoip.lookup(ip);
            return {
                query: ip,
                countryCode: geo ? geo.country : null
            };
        });

        res.json(results);
    } catch (error) {
        console.error('Geocoding Error:', error.message);
        res.status(500).json({ error: 'Failed to process IP addresses' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});