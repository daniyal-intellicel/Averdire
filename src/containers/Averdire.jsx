import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppLocale from "../lngProvider";

import MainApp from "./MainApp";
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import { setInitUrl } from "../redux/actions/Auth";

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class Averdire extends Component {
  componentWillMount() {
    if (this.props.initURL === "") {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
  }

  render() {
    const { match, location, authUser, initURL, locale } = this.props;
    if (location.pathname === "/") {
      if (authUser === null) {
        return <Redirect to={"/signin"} />;
      } else if (initURL === "" || initURL === "/" || initURL === "/signin") {
        return <Redirect to={"/user/manage"} />;
      } else {
        return <Redirect to={initURL} />;
      }
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <RestrictedRoute
              path={`${match.url}`}
              authUser={authUser}
              component={MainApp}
            />
            <Route component={NotFound} />
          </Switch>
        </IntlProvider>
    );
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { locale, navStyle, layoutType } = settings;
  const { authUser, initURL } = auth;
  return { locale, navStyle, layoutType, authUser, initURL };
};
export default connect(mapStateToProps, { setInitUrl })(Averdire);
