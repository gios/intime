import express from "express";
import React from "react";
import Router from "react-router";
const app = express();

// set up Jade
app.set("views", "./views");
app.set("view engine", "jade");

import routes from "../shared/routes";

app.get("/*", function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render("index", { content: content });
  });
});

app.listen(3000, function () {
  console.log("Example app listening at http://localhost:3000");
});
