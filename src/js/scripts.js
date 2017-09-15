import React from "react";
import ReactDOM from "react-dom";


class HelloWorld extends React.Component {

  render() {
    return (
      <section id="hello-world">
        <h2>Hello World, {this.props.name}!</h2>
      </section>
    )
  }

}

class App extends React.Component {

  render() {
    return (
      <section>
          <HelloWorld name='Robert' />
      </section>
    )
  }

}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
