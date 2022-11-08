import React, { useState } from "react";
import AllItems from "./AllItems";
import { useDispatch } from "react-redux";
import { add_Item, delete_Item, remove_All } from "../action/index";
const Todo = () => {
  const [itemData, setItemData] = useState("");
  const dispatch = useDispatch();

  //ItemsData function
  const ItemsData = (event) => {
    setItemData(event.target.value);
  };

  //onclick event
  const click_To_Add = () => {
    dispatch(add_Item(itemData));
    setItemData(" ");
  };

  //return
  return (
    <>
      <div className="">
        <div
          className="card mt-5"
          style={{ margin: "auto", maxWidth: "500px" }}
        >
          <h5 className="card-header info-color white-text text-center py-4">
            <strong>Todo With Redux</strong>
          </h5>

          <div className="card-body px-lg-5 pt-0">
            <div className="md-form">
              <input
                type="email"
                value={itemData}
                id="materialLoginFormEmail"
                className="form-control"
                placeholder="Enter Item"
                onChange={ItemsData}
              />
            </div>

            <button
              className="btn btn-info btn-rounded btn-block my-4 waves-effect z-depth-0"
              type="submit"
              onClick={click_To_Add}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
      {/* //output items */}
      <div>
        <AllItems />
      </div>
    </>
  );
};

export default Todo;
