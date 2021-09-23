import React, { useState } from "react";

function CustomImage({ data, key }) {
  // thmubnail image url
  const url = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_q.jpg`;

  // 500px image url
  const mainUrl = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`;

  return (
    <img
      key={key}
      src={url}
      className="img"
      alt={data.title}
      onClick={() => window.open(mainUrl, "_blank")}
    />
  );
}

export default CustomImage;
