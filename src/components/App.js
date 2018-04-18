import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorage) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
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
  updateFish = (key, updatedFish) => {
    //1.take a copy of the current state
    const fishes = { ...this.state.fishes };
    //2. update that state
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  deleteFish = key => {
    //1. get the all copy from state
    const fishes = { ...this.state.fishes };
    //2.update the fish
    fishes[key] = null;
    //3. remove fish
    this.setState({ fishes });
  };
  addToOrder = key => {
    // 1. take copy of state
    const order = { ...this.state.order };
    // 2. enter add to order or update the number in our order
    order[key] = order[key] + 1 || 1;
    // call setstate to update our stat object
    this.setState({ order });
  };
  deleteFromOrder = key => {
    // 1. take copy of state
    const order = { ...this.state.order };
    // 2. remove to order or update the number in our order
    delete order[key];
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
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <Order
          deleteFromOrder={this.deleteFromOrder}          
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
