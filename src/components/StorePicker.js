import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.goToStore = this.goToStore.bind(this);
  }
  //myTextInput = React.createRef();
  goToStore = event => {
    // 1. stop the form form submitting
    event.preventDefault();
    // 2. get the text from that inpur
    //const storeName= this.myInput.value;
    // console.log(this.textInput.value);

    const storeName = this.textInput.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store </h2>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submitt=">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
