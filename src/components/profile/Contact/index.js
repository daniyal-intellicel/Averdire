import React from "react";
import Widget from "components/Widget";

const Contact = ({ user }) => {
  if (user.userData && user.userData.socialProfiles) {
    let social = user.userData.socialProfiles;
    return (
      <Widget title="Social Links" styleName="gx-card-profile-sm">
        <div className="ant-row">
          <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-12">
            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fas fa-envelope gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Email</h6>
                {social.email.userId === "" ? (
                  "Not Added"
                ) : (
                  <p className="gx-mb-0">{social.email.userId}</p>
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-facebook gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Facebook</h6>
                {social.facebook.userId === "" ? (
                  "Not Added"
                ) : (
                  <p className="gx-mb-0">{social.facebook.userId}</p>
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-instagram gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Instagram</h6>
                {social.instagram.userId === "" ? (
                  "Not Added"
                ) : (
                  <p className="gx-mb-0">{social.instagram.userId}</p>
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-linkedin gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Linkedin</h6>
                {social.linkedin.userId === "" ? (
                  "Not Added"
                ) : (
                  <p className="gx-mb-0">{social.linkedin.userId}</p>
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-pinterest gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Pinterest</h6>
                {social.pinterest && social.pinterest.userId !== "" ? (
                  <p className="gx-mb-0">{social.pinterest.userId}</p>
                ) : (
                  "Not Added"
                )}
              </div>
            </div>

          </div>  

          <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-12">

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-snapchat gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Snapchat</h6>
                {social.snapchat.userId === "" ? (
                  "Not Added"
                ) : (
                  <p className="gx-mb-0">{social.snapchat.userId}</p>
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-twitter gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Twitter</h6>
                {social.twitter.userId === "" ? (
                  "Not Added"
                ) : (
                  <p className="gx-mb-0">{social.twitter.userId}</p>
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-whatsapp gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">WhatsApp</h6>
                {social.whatsapp.userId === "" ? (
                  "Not Added"
                ) : (
                  <p className="gx-mb-0">{social.whatsapp.userId}</p>
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-youtube gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Youtube</h6>
                {social.youtube && social.youtube.userId !== "" ? (
                  <p className="gx-mb-0">{social.youtube.userId}</p>
                ) : (
                  "Not Added"
                )}
              </div>
            </div>

            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
              <div className="gx-mr-3">
                <i className={`fab fa-tiktok gx-fs-xlxl gx-text-orange`} />
              </div>
              <div className="gx-media-body">
                <h6 className="gx-mb-1 gx-text-grey">Tiktok</h6>
                {social.tiktok && social.tiktok.userId !== "" ? (
                  <p className="gx-mb-0">{social.tiktok.userId}</p>
                ) : (
                  "Not Added"
                )}
              </div>
            </div>
        
          </div>
        </div>
      </Widget>
    );
  } else {
    return null;
  }
};

export default Contact;
