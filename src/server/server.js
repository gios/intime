import express from "express";
import React from "react";
import Router from "react-router";
const app = express();

// set up Jade
app.set("views", "./views");
app.set("view engine", "jade");
app.set("port", (process.env.PORT || 5000));

import routes from "../shared/routes";

app.get("/*", function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render("index", { content: content });
  });
});

app.listen(app.get("port"), function () {
  console.log("Intime listening at http://localhost:", app.get("port"));
});
