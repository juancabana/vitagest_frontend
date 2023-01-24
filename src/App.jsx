import React, { Component } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import client from "./core/config/client";

import { ApolloProvider } from "@apollo/client";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <AppRouter />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
