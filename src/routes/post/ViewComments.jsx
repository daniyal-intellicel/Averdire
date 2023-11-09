import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Col, Row, message, Card } from "antd";

import { Auxiliary, Spin } from "utils";

import { postCommentsFetch } from "../../redux/actions/Post";

class ViewComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      comments: null,
      notFound: false,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      let comments = await this.props.postCommentsFetch(
        this.props.match.params.id
      );

      this.setState({
        id: this.props.match.params.id,
        comments: comments,
        loading: false,
      });
    } catch (error) {
      message.error("Comments not found.");
      this.setState({ notFound: true });
    }
  }

  render() {
    const { comments } = this.state;

    if (!this.state.notFound) {
      if (this.state.loading) {
        return (
          <Spin tip="Please wait ..." spinning={this.state.loading}></Spin>
        );
      } else {
        return (
          <Auxiliary>
            <div>
              <Row>
                <Col xl={24} lg={24} md={24} sm={48} xs={48}>
                  {comments && comments.length > 0 ? (
                    comments.map((comm) => (
                      <Card key={comm.id} title={"Id: " + comm.id}>
                        <p>
                          <span className="gx-fs-sm gx-font-weight-medium">
                            comment:
                          </span>
                          <span className="gx-ml-2 gx-fs-sm gx-font-weight-light">
                            {comm.comment}
                          </span>
                        </p>
                        <p>
                          <span className="gx-fs-sm gx-font-weight-medium">
                            createdAt:
                          </span>
                          <span className="gx-ml-2 gx-fs-sm gx-font-weight-light">
                            {comm.createdAt}
                          </span>
                        </p>
                        <p>
                          <span className="gx-fs-sm gx-font-weight-medium">
                            userId:
                          </span>
                          <span className="gx-ml-2 gx-fs-sm gx-font-weight-light">
                            {comm.user.id}
                          </span>
                        </p>
                        <p>
                          <span className="gx-fs-sm gx-font-weight-medium">
                            user name:
                          </span>
                          <span className="gx-ml-2 gx-fs-sm gx-font-weight-light">
                            {comm.user.firstName + " " + comm.user.lastName}
                          </span>
                        </p>
                      </Card>
                    ))
                  ) : (
                    <p>Comments not available</p>
                  )}
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
    postCommentsFetch,
  }
)(ViewComments);
