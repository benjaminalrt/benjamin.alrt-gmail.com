import React, { useState } from "react";
import { connect } from "react-redux";

const UserForm = props => {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            onChange={event => setUserInput(event.target.value)}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.addUser(userInput)}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
  return {
    // on utilisera cette fonction dans le composant via : props.addUser
    addUser: username => {
      dispatch({ type: "ADD_USER", data: { username } });
    }
  };
};

// connexion du composant pour lui permettre de dispatcher des actions
export default connect(
  null,
  mapDispatchToProps
)(UserForm);
