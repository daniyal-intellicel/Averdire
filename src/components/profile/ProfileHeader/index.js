import React from "react";
import { Avatar } from "antd";

const ProfileHeader = ({ data }) => {
  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top" style={{ marginBottom: "0px" }}>
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar
                className="gx-size-90"
                alt="..."
                src={
                  data && data.avatar
                    ? data.avatar.url
                    : require("assets/images/user.svg")
                }
              />
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">
                {data && `${data.firstName} ${data.lastName}`}
              </h2>
              <p className="gx-mb-0 gx-fs-lg">Email: {data.email}</p>
              <p className="gx-mb-0 gx-fs-lg">Phone: {data.phoneNumber}</p>
            </div>
          </div>

          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  Role
                </span>
                <span className="gx-fs-sm">{data.role}</span>
              </li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  Company Id
                </span>
                <span className="gx-fs-sm">{data.companyId}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
