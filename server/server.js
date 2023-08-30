const express = require("express");
const db = require("./db/conn");
const equipmentRoutes = require("./routes/equipmentRoutes"); // Adjust the path as needed

const app = express();

require("dotenv").config({ path: "./env" });

// Other app setup code

app.use("/api", equipmentRoutes); // Mount equipment routes under /api

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
