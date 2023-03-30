const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const customersRouter = require("./routes/customers");
const employeesRouter = require("./routes/employees");
const officesRouter = require("./routes/offices");
const orderdetailsRouter = require("./routes/orderdetails");
const ordersRouter = require("./routes/orders");
const paymentsRouter = require("./routes/payments");
const productsRouter = require("./routes/products");
const productlinesRouter = require("./routes/productlines");

const usersRouter = require("./routes/users");

const app = express();

app.locals.con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_SUPERUSER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/customers", customersRouter);
app.use("/employees", employeesRouter);
app.use("/offices", officesRouter);
app.use("/orderdetails", orderdetailsRouter);
app.use("/orders", ordersRouter);
app.use("/payments", paymentsRouter);
app.use("/products", productsRouter);
app.use("/productlines", productlinesRouter)
app.use("/users", usersRouter);

module.exports = app;
