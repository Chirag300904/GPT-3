import React from "react";
import "./brand.css";
import {  slack, shopify, dropbox, atlassian, google } from "./imports.js";

const Brand = () => {
  return (<div className="gpt3-brand section-padding">
<div>
  <img src={google} alt="Google"/>
</div>
<div>
  <img src={shopify} alt="Shopify"/>
</div>
<div>
  <img src={slack} alt="Slack"/>
</div>
<div>
  <img src={atlassian} alt="Atlassian"/>
</div>
<div>
  <img src={dropbox} alt="Dropbox"/>
</div>
  </div>)
};

export default Brand;
