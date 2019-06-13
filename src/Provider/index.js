import React, { Component } from "react";
export const MyContext = React.createContext();

const MenuItems = [
  { id: 1, name: "Hamburger", price: 200, imgSrc: "burger" },
  { id: 2, name: "Fries", price: 100, imgSrc: "fries" },
  { id: 3, name: "Coke", price: 50, imgSrc: "coke" },
  { id: 4, name: "Pepsi", price: 50, imgSrc: "pepsi" }
];

export class MyProvider extends Component {
  state = {
    MenuItems: MenuItems,
    orderDetails: []
  };

  removeItem = itemId => {
    let orderDetails = this.state.orderDetails;
    console.log("Before update", orderDetails);
    orderDetails = orderDetails.map(item => {
      if (item.id === itemId) {
        item.count = item.count - 1;
      }
      return item;
    });
    this.setState({ orderDetails: orderDetails.filter(p => p.count > 0) });
  };

  addItem = itemId => {
    let orderDetails = this.state.orderDetails;
    if (orderDetails.length > 0) {
      const currentItem = orderDetails.filter(item => item.id === itemId);
      if (currentItem.length > 0) {
        orderDetails.forEach(item => {
          if (item.id === itemId) {
            item.count = item.count + 1;
          }
        });
      } else {
        orderDetails.push({ id: itemId, count: 1 });
      }
    } else {
      orderDetails.push({ id: itemId, count: 1 });
    }
    console.log("In addItem function", orderDetails);
    this.setState({ orderDetails });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          removeItem: this.removeItem,
          addItem: this.addItem
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
