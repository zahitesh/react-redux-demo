import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../redux/cakeActions";

function HookCakeContainer() {
  const numOfCake = useSelector((state) => state.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks Cake - {numOfCake}</h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default HookCakeContainer;
