import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authorize } from "../../reducers/reducerIdent";
import "./login.css";

class Login extends PureComponent {
  constructor(props, context) {
    super(props);
    this.state = { login: "", password: "" };
  }

  componentWillMount() {
    if (window.localStorage.getItem("token")) {
      this.props.history.push("/todoapp");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const login = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    this.props.dispatch(authorize(login, password));
  };

  render() {
    const { token } = this.props;

    if (token) {
      return <Redirect to="/todoapp" />;
    }

    return (
      <div className="row">
        <div className="col-md-12 label">
          <h2>Пожалуйста, введите логин:</h2>
        </div>

        <form className="col-md-4 form" onSubmit={this.handleSubmit}>
          <input className="input" type="text" placeholder="login" />
          <input className="input" type="password" placeholder="password" />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.authReducer.token,
  error: state.authReducer.error
});

export default connect(mapStateToProps)(Login);
