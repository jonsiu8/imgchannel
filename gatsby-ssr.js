/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
  <script
      key="1"
      type="text/javascript"
      src="https://www.imgchannel.com/replainscript.js"
    />,
  ]);
}