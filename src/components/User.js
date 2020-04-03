import React from "react";
import { connect } from "react-redux";

const User = props => {
  return (
    <div className="user">
      <div className="alert alert-primary" role="alert">
        <span className="text">{props.username}</span>
        <button
          type="button"
          className="btn btn-danger float-vertical-align"
          onClick={() => props.removeUser(props.username)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
  return {
    // on utilisera cette fonction dans le composant via : props.removeUser
    removeUser: username => {
      dispatch({ type: "REMOVE_USER", data: { username } });
    }
  };
};

// connexion du composant pour lui permettre de dispatcher des actions
export default connect(
  null,
  mapDispatchToProps
)(User);
