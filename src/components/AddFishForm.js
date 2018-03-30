import React from "react";

class AddFishForm extends React.Component {
  constructor() {
    super();
    this.createFish = this.createFish.bind(this);
  }
  createFish = event => {
    // 1. stop the form form submitting
    event.preventDefault();
    const name = this.ref.nameref.value.value;
    const price = parseFloat(this.ref.priceref.value);
    const status = this.ref.statusref.value;
    const desc = this.ref.descref.value;
    const image = this.ref.imageref.value;

    // console.log(this.refs.nameref.value);
    const fish = {
      name,
      price,
      status,
      desc,
      image
    };
    console.log(fish);
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref="nameref" type="text" placeholder="name" />
        <input name="price" ref="priceref" type="text" placeholder="price" />
        <select name="status" ref="statusref">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref="descref" placeholder="desc" />
        <input name="image" ref="imageref" type="text" placeholder="image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
