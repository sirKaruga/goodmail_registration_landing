import React from "react";
import { Card } from "react-bootstrap";

function about() {
  return (
    <Card style={{ marginTop: "15em" }} className="vertical-center container">
      <div className="App container">
        <div style={{ fontFamily: "sans-serif" }}>
          <h2 style={{ color: "#1261A0" }}>In a Nutshell:</h2>

          <p>
            We Use a High Order Technology to Check Through Hundreds of
            thousands of Tech users and identify their like behaviour to
            different web contents, then suggest your site content to them. This
            gives you more viewers to your site!!
          </p>
          <p style={{ color: "#c00000" }}>
            You only need to Register your site with us.!.
          </p>
          <p>
            Since there are only a finite number of fans for a specific topic
            (blog type), we will serve you on a first come first served basis.
            Register your blog below.
          </p>
        </div>
      </div>
    </Card>
  );
}
export default about;
