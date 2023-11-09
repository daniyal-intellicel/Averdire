import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Table, Button } from "antd";

import { postListFetch } from "redux/actions/Post";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this.columns = [
      {
        title: "Post ID",
        dataIndex: "id",
        width: "5%",
      },
      {
        title: "User ID",
        dataIndex: "user.id",
        width: "5%",
      },
      {
        title: "First Name",
        dataIndex: "user.firstName",
        width: "5%",
      },
      {
        title: "Last Name",
        dataIndex: "user.lastName",
        width: "5%",
      },
      {
        title: "Description",
        dataIndex: "description",
        width: "50%",
      },
      {
        title: "Actions",
        dataIndex: "update",
        width: "5%",
        render: (update, post) => {
          let id = post.id;
          return (
            <div key={id}>
              <Link to={{ pathname: `/post/comments/${id}`, data: { post } }}>
                <Button type="primary" size="small">
                  View Comments
                </Button>
              </Link>
            </div>
          );
        },
      },
    ];
  }

  componentDidMount() {
    this.props.postListFetch();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.users &&
      nextProps.users.users_list
      // && nextProps.users.pagination
    ) {
      // const pagination = nextProps.users.pagination;
      const users_list = nextProps.users.users_list;

      this.setState({
        loading: false,
        users_list,
        // pagination
      });
    }
  }

  render() {
    return (
      <Card className="gx-card" title="Posts List">
        <Table
          columns={this.columns}
          size={"small"}
          dataSource={this.props.postList || []}
          rowKey={(record) => record.id}
          pagination={false}
          loading={this.state.loading}
          bordered
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ post }) => {
  const { postList } = post;
  return { postList };
};

export default connect(
  mapStateToProps,
  { postListFetch }
)(Post);
