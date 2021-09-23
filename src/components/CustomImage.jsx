import React from "react";

function CustomImage({ data, key }) {
  const url = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`;

  return <img key={key} src={url} className="img" alt={data.title} />;
}

export default CustomImage;
