const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/doctors", require("./routes/doctor.routes"));
app.use("/api/patients", require("./routes/patient.routes"));
app.use("/api/appointments", require("./routes/appointment.routes"));

app.listen(5000, () => console.log("Server running"));