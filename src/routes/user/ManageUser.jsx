import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Table, Button, Input, Icon } from "antd";

import { usersList } from "redux/actions/User";

class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users_list: [],
      pagination: {
        pageSize: 1000,
        current: 1,
        total: 0,
        lastKey: "",
        firstKey: "",
        lastPage: 0,
      },
      loading: false,
      searchUid: "",
    };

    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        width: "10%",
        // ...this.getColumnSearchProps("id"),
      },
      {
        title: "First Name",
        dataIndex: "firstName",
        width: "20%",
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        width: "20%",
      },
      {
        title: "Actions",
        dataIndex: "update",
        width: "20%",
        render: (update, user) => {
          let id = user.id;
          return (
            <div key={id}>
              <Link to={`/user/view/${id}`}>
                <Button type="primary" size="small">
                  View
                </Button>
              </Link>
            </div>
          );
        },
      },
    ];
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search this column`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleTableChange = (pagination, filters, sorter) => {
    this.onCollectionUpdate({
      pagination,
      filters,
      sorter,
    });
  };

  onCollectionUpdate(params = {}) {
    this.setState({ loading: true });
    const pagination = { ...this.state.pagination };
    if (params.pagination) {
      pagination.current = params.pagination.current;
    }

    this.props.usersList(pagination, this.state.searchUid);
  }

  componentDidMount() {
    this.onCollectionUpdate();
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

  confirm = async (uid, status) => {
    this.setState({ loading: true });
    let result = await this.props.updateUserStatus(uid, status);
    if (result === true) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: false });
      alert(result);
    }
  };

  cancel = (uid) => {
    // delete canceled
  };

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({ searchUid: selectedKeys[0] }, this.onCollectionUpdate());
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchUid: "" });
  };

  render() {
    return (
      <Card className="gx-card" title="Users List">
        <Table
          columns={this.columns}
          size={"small"}
          dataSource={this.state.users_list}
          rowKey={(record) => record.id}
          pagination={false}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          bordered
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ auth, user }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  const { users } = user;
  return { loader, alertMessage, showMessage, authUser, users };
};

export default connect(
  mapStateToProps,
  { usersList }
)(ManageUser);
