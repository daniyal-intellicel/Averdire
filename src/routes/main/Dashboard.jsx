import React from "react";
import { Col, Row, Card } from "antd";
import { Link } from "react-router-dom";

import IconWithTextCard from "components/dashboard/CRM/IconWithTextCard";

const Dashboard = () => {
  return (
    <Card className="gx-card" title={"Dashboard"}>
      <Row>
        <Col xl={16} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-1">
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Link to="/user/manage">
                <IconWithTextCard cardColor="cyan" icon="user" title="Users" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Dashboard;
