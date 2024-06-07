const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const indexRouter = require("./routes/index"); 
const librosRoutes = require("./routes/librosRoutes"); 
const alumnosRoutes = require("./routes/alumnosRoutes"); 
const alumnosLibrosRoutes = require('./routes/alumnosLibrosRoutes');



app.set('views', path.resolve(__dirname, './views'));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public" )));

app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));


app.use("/",indexRouter);

app.use(librosRoutes);

app.use("/", alumnosRoutes);

app.use('/', alumnosLibrosRoutes);

app.listen(3001, () => {console.log("Server is running on port 3001")});