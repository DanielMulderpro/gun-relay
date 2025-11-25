const express = require('express');
const relay = require('@gun-vue/relay');
const app = express();
const port = process.env.PORT || 10000;  // Render's default

app.use(express.static('public'));  // Optional: For static game files

// Init GUN relay
relay.init({
  host: '0.0.0.0',
  port: port,
  store: true,      // Persist data
  showQr: false
});

app.listen(port, () => {
  console.log(`🚀 GUN Relay LIVE on port ${port}!`);
});
