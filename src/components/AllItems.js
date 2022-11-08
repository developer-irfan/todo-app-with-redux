import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_Item, delete_Item, remove_All } from "../action/index";
const AllItems = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  //return
  return (
    <div
      className="container"
      style={{ maxWidth: "500px", marginTop: "15px", textAlign: "center" }}
    >
      {list.map((elem) => {
        return (
          <div
            className="container alert alert-primary"
            role="alert"
            key={elem.id}
          >
            {elem.data}
            <a
              className="btn-floating btn-sm btn-tw"
              type="button"
              role="button"
            >
              <i
                className="far fa-trash-alt"
                onClick={() => dispatch(delete_Item(elem.id))}
              ></i>
            </a>
          </div>
        );
      })}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => dispatch(remove_All())}
      >
        Remove All
      </button>
    </div>
  );
};

export default AllItems;
