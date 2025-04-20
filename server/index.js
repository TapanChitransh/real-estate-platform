const app = require('./src/app');
const connectDB = require('./src/config/db');
const PORT = process.env.PORT || 5000;

console.log("Db is connected!!!");
console.log(connectDB());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

