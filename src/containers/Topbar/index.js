import React, { Component } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "utils/CustomScrollbars";
import languageData from "./languageData";
import {
  switchLanguage,
  toggleCollapsedSideNav
} from "../../redux/actions/Setting";
import UserInfo from "components/UserInfo";
import Auxiliary from "utils/Auxiliary";

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE
} from "../../constants/ThemeSetting";
import { connect } from "react-redux";

const { Header } = Layout;

class Topbar extends Component {
  state = {
    searchText: ""
  };

  languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language => (
          <li
            className="gx-media gx-pointer"
            key={JSON.stringify(language)}
            onClick={e => this.props.switchLanguage(language)}
          >
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
            <span className="gx-language-text">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  updateSearchChatUser = evt => {
    this.setState({
      searchText: evt.target.value
    });
  };

  render() {
    const { width, navCollapsed, navStyle } = this.props;
    return (
      <Auxiliary>
        <Header>
          {navStyle === NAV_STYLE_DRAWER ||
          ((navStyle === NAV_STYLE_FIXED ||
            navStyle === NAV_STYLE_MINI_SIDEBAR) &&
            width < TAB_SIZE) ? (
            <div className="gx-linebar gx-mr-3">
              <i
                className="gx-icon-btn icon icon-menu"
                onClick={() => {
                  this.props.toggleCollapsedSideNav(!navCollapsed);
                }}
              />
            </div>
          ) : null}
          <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
            <img alt="" src={require("assets/logos/logo50.png")} />
          </Link>

          <ul className="gx-header-notifications gx-ml-auto">
            {width >= TAB_SIZE ? (
              <li className="gx-user-nav">
                <UserInfo />
              </li>
            ) : (
              <Auxiliary>
                <li className="gx-user-nav">
                  <UserInfo />
                </li>
              </Auxiliary>
            )}
          </ul>
        </Header>
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale, navStyle, navCollapsed, width } = settings;
  return { locale, navStyle, navCollapsed, width };
};

export default connect(
  mapStateToProps,
  { toggleCollapsedSideNav, switchLanguage }
)(Topbar);
