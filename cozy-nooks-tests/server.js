const express = require('express');
const path = require('path');
const app = express();
const port = 3300;

// Serve static files from the 'public' directory (you can choose any directory name)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`The Cozy Nook Café site is being served at http://localhost:${port}`);
});
