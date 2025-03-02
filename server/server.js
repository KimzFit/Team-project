const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");
const cookieParser = require("cookie-parser");
const { swaggerUi, swaggerSpec } = require("./config/swagger");

const app = express();
const PORT = 7000;

//*********************Middleware**********************/
app.use(express.json());
app.use(cors({
  credentials : true,
  origin : ["http://localhost:4200" , "http://localhost:5173"]
}));
app.use(cookieParser());
app.use(morgan("dev"));
//*************************************************** */

readdirSync("./routes").map((c) => app.use("/api", require("./routes/" + c)));

//*********Swagger Docuemntation*********//
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server has been running on PORT ${PORT}`);
});
