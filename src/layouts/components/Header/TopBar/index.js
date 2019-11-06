import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import styles from "./styles";

class TopBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.topBar}>
        <ToolBar className={classes.toolBar}>
          <div className={classes.authText + " " + classes.divTopBar}>
            <Link
              /* onClick={() => this.props.showAuth(false)} */
              className={classes.authLink}
              id="btnSignIn"
            >
              Sign In
            </Link>
            <span>|</span>
            <Link
              /* onClick={() => this.props.showAuth(true)} */
              className={classes.authLink}
              id="btnRegister"
            >
              Register
            </Link>
          </div>
          <div className={classes.authText + " " + classes.divTopBar}>
            <span>Cart</span>
          </div>
        </ToolBar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TopBar);