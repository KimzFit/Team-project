const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc")

const swaggerOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "A simple API documentation",
    },
    servers: [
      {
        url: "http://localhost:7000",
        description: "API Server"
      },
    ],
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOption)

module.exports = { swaggerUi , swaggerSpec}