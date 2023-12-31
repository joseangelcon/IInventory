const express = require("express");
const db = require("./db/conn");
const equipmentRoutes = require("./routes/equipmentRoutes"); // Adjust the path as needed
const categoryRoutes = require("./routes/categoryRoutes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

require("dotenv").config({ path: "./env" });

// Other app setup code

app.use("/api", equipmentRoutes); // Mount equipment routes under /api
app.use("/api", categoryRoutes); //

app.use((err, req, res, next) => {
  const statusCode = err.status || 500; // Default to 500 Internal Server Error
  res.status(statusCode).json({ error: err.message });
});

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
