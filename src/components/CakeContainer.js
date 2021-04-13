import React from "react";

import { connect } from "react-redux";

import { buyCake } from "../redux/cakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Cake Count - {props.cake}</h2>
      <button onClick={props.buyCake}>BUY CAKE</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cake: state.numOfCake
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
