import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // 1. take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({
      fishes
    });
  };

  addToOrder = key => {
    // 1. take copy of state
    const order = { ...this.state.order };
    // 2. enter add to order or update the number in our order
    order[key] = order[key] + 1 || 1;
    // call setstate to update our stat object
    this.setState({ order });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
          <ul>
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
              key={key} 
              index={key}
              details={this.state.fishes[key]} 
              addToOrder ={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
