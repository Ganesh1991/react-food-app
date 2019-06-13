import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "./MenuItem";

const MenuList = props =>
  props.list.map(item => {
    const addedItemCount = getOrderedItemCount(item.id, props.orderDetails);
    // console.log("addedItemCount", addedItemCount);
    return (
      <Grid item xs={12} sm={6} md={4}>
        <MenuItem
          item={item}
          classes={props.classes}
          count={addedItemCount}
          addItem={props.addItem}
          removeItem={props.removeItem}
        />
      </Grid>
    );
  });

const getOrderedItemCount = (itemId, orderDetails) => {
  if (orderDetails.length > 0) {
    const filteredItem = orderDetails.filter(item => {
      if (item.id === itemId) {
        return item;
      }
    });
    return filteredItem.length ? filteredItem[0].count : 0;
  } else {
    return 0;
  }
};

export default MenuList;
