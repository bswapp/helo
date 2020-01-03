import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, clearUser } from "../../ducks/reducer";

class Nav extends Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/dashboard">Home</Link>
        </button>
        <button>
          <Link to="/post">New Post</Link>
        </button>
        <button>
          <Link to="/">Logout</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user
  };
};

const mapDispatchToProps = {
  updateUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
