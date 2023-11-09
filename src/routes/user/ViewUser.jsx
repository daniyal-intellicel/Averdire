import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Col, Row, message, Card } from "antd";
import { Scrollbars } from "react-custom-scrollbars";

import { Auxiliary, Spin } from "utils";
import ProfileHeader from "../../components/profile/ProfileHeader/index";
import { userData } from "redux/actions/User";
import { createRenderingData } from "../../utils";

class ViewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user: null,
      notFound: false,
      loading: true,
    };
  }

  async componentDidMount() {
    let user = await this.props.userData(this.props.match.params.id);
    if (user) {
      this.setState({
        id: this.props.match.params.user_id,
        user: user,
        loading: false,
      });
    } else {
      message.error("User not found.");
      this.setState({ notFound: true });
    }
  }

  renderScrolls = (exp) => {
    const toRender = [];

    createRenderingData(toRender, exp);
    
    return toRender.map((data) => (
      <div>
        <span className="gx-fs-sm gx-font-weight-medium">{data.key}:</span>
        <span className="gx-ml-2 gx-fs-sm gx-font-weight-light">
          {data.value}
        </span>
      </div>
    ));
  };

  render() {
    const { user } = this.state;

    if (!this.state.notFound) {
      if (this.state.loading) {
        return (
          <Spin tip="Please wait ..." spinning={this.state.loading}></Spin>
        );
      } else {
        return (
          <Auxiliary>
            <ProfileHeader data={this.state.user} />
            <div className="gx-profile-content">
              <Row>
                <Col xl={24} lg={24} md={24} sm={48} xs={48}>
                  {user.profile && (
                    <Card title="Profile">
                      {Object.keys(user.profile).map((key) => (
                        <p>
                          <span className="gx-fs-sm gx-font-weight-medium">
                            {key}:
                          </span>
                          <span className="gx-ml-2 gx-fs-sm gx-font-weight-light">
                            {user.profile[key]}
                          </span>
                        </p>
                      ))}
                    </Card>
                  )}
                  <Card title="Skills" style={{ overflowX: "hidden" }}>
                    <Scrollbars style={{ height: 500 }}>
                      {user.userSkill.map((exp, i) => (
                        <Card type="inner" title={i + 1}>
                          {this.renderScrolls(exp)}
                        </Card>
                      ))}
                    </Scrollbars>
                  </Card>
                  <Card title="Interests" style={{ overflowX: "hidden" }}>
                    <Scrollbars style={{ height: 500 }}>
                      {user.userInterest.map((exp, i) => (
                        <Card type="inner" title={i + 1}>
                          {this.renderScrolls(exp)}
                        </Card>
                      ))}
                    </Scrollbars>
                  </Card>
                  <Card title="Experiences" style={{ overflowX: "hidden" }}>
                    <Scrollbars style={{ height: 500 }}>
                      {user.experience.map((exp, i) => (
                        <Card type="inner" title={i + 1}>
                          {this.renderScrolls(exp)}
                        </Card>
                      ))}
                    </Scrollbars>
                  </Card>
                  <Card title="Education" style={{ overflowX: "hidden" }}>
                    <Scrollbars style={{ height: 500 }}>
                      {user.education.map((edu, i) => (
                        <Card type="inner" title={i + 1}>
                          {this.renderScrolls(edu)}
                        </Card>
                      ))}
                    </Scrollbars>
                  </Card>
                  <Card title="Projects" style={{ overflowX: "hidden" }}>
                    <Scrollbars style={{ height: 500 }}>
                      {user.projects.map((proj, i) => (
                        <Card type="inner" title={i + 1}>
                          {this.renderScrolls(proj)}
                        </Card>
                      ))}
                    </Scrollbars>
                  </Card>
                </Col>
              </Row>
            </div>
          </Auxiliary>
        );
      }
    } else {
      return <Redirect to={"/user/manage"} />;
    }
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser };
};

export default connect(
  mapStateToProps,
  {
    userData,
  }
)(ViewUser);
