const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Users API",
    description: "Users API"
  },
  host: "https://cse341project2-ziwy.onrender.com",
  schemes: ["http", "https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);