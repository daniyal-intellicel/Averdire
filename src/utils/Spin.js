import React from "react";
import { Spin as AntdSpin } from "antd";

export const Spin = props => (
  <div style={{ width: "100%", textAlign: "center" }}>
    <AntdSpin {...props}></AntdSpin>
  </div>
);
