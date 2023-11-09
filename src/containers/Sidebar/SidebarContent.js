import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "utils/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import Auxiliary from "utils/Auxiliary";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";
import IntlMessages from "../../utils/IntlMessages";
import { connect } from "react-redux";

// const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SidebarContent extends Component {
  getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const { themeType, pathname } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];

    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
              mode="inline"
            >
              <MenuItemGroup
                key="main"
                className="gx-menu-group"
                title={<IntlMessages id="sidebar.main" />}
              >
                {/* <Menu.Item key="dashboard">
                  <Link to="/main/dashboard">
                    <i className="icon fa fa-tachometer-alt" />
                    <span>Dashboard</span>
                  </Link>
                </Menu.Item> */}

                <Menu.Item key="user">
                  <Link to="/user/manage">
                    <i className="icon fa fa-users" />
                    <span>Users</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="post">
                  <Link to="/post/list">
                    <i className="icon fa fa-paper-plane" />
                    <span>Posts</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="job">
                  <Link to="/job/list">
                    <i className="icon fa fa-briefcase" />
                    <span>Jobs</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="company">
                  <Link to="/company/list">
                    <i className="icon fa fa-building" />
                    <span>Company</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="skill">
                  <Link to="/data/skill/list">
                    <i className="icon fa fa-cogs" />
                    <span>Skills</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="interest">
                  <Link to="/data/interest/list">
                    <i className="icon fa fa-smile-beam" />
                    <span>Interests</span>
                  </Link>
                </Menu.Item>

                {/* <Menu.Item key="onlineUsers">
                  <Link to="/user/online">
                    <i className="icon fa fa-globe-americas" />
                    <span>Online Users</span>
                  </Link>
                </Menu.Item> */}

                <Menu.Item key="reportedUsers">
                  <Link to="/abuseReport/list">
                    <i className="icon fas fa-user-slash" />
                    <span>Reported Users</span>
                  </Link>
                </Menu.Item>

                {/* <Menu.Item key="permanentUsers">
                  <Link to="/user/permanent">
                    <i className="icon fas fa-user-friends" />
                    <span>Permanent Users</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="sponsor">
                  <Link to="/sponsor/manage">
                    <i className="icon fas fa-handshake" />
                    <span>Sponsors</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="userAnalytics">
                  <Link to="/analytics/user">
                    <i className="icon fas fa-chart-bar" />
                    <span>User Stats</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="sponsorAnalytics">
                  <Link to="/analytics/sponsor">
                    <i className="icon fas fa-chart-bar" />
                    <span>Sponsor Stats</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="ProductAanalytics">
                  <Link to="/analytics/product">
                    <i className="icon fas fa-chart-bar" />
                    <span>Product Stats</span>
                  </Link>
                </Menu.Item> */}
              </MenuItemGroup>
            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({ settings }) => {
  const { navStyle, themeType, locale, pathname } = settings;
  return { navStyle, themeType, locale, pathname };
};
export default connect(mapStateToProps)(SidebarContent);
