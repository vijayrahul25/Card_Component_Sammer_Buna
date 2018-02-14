import React from "react";
import ReactDOM from "react-dom";
import CardList from "./pages/CardList";

let data = [
  {
    name: "Rahul vijayvergiya",
    imagesrc: "https://avatars0.githubusercontent.com/u/5079470?v=4",
    company: "Self Employedest"
  },
  {
    name: "Samer Buna",
    imagesrc: "https://avatars3.githubusercontent.com/u/7509?v=4",
    company: "jsComplete.com"
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <CardList cards={data}/>
      </div>
    );
  }
}
// render app component
ReactDOM.render(<App />, document.getElementById("root"));
