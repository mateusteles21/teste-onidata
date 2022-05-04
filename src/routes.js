import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/cadastro";
import Produtos from "./pages/produtos/produtos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Cadastro" component={Cadastro}/>
        <Route exact path="/Produtos" component={Produtos}/>
      </Switch>
    </BrowserRouter>
  );
}
