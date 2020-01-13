require("dotenv").config();
const controller = require("./controller");
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { SERVER_PORT, SECRET_SESSION, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());
app.use(
  session({
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 10
    }
  })
);

// ENDPOINTS! //

app.post("/auth/register", controller.register);
app.post("/auth/login", controller.login);
app.post("/auth/logout", controller.logout);
app.get("/auth/me", controller.me);

app.get("/auth/posts", controller.searchPosts);
app.get("/auth/post/:id", controller.getPost);
app.post("/api/post/", controller.addPost);

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("database connected");
  })
  .catch(err => console.log(err));

app.listen(SERVER_PORT, () =>
  console.log(`welcome to the ${SERVER_PORT} party`)
);
