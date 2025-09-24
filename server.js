const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD Pipeline working successfully!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
