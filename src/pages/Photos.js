import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

export default function Photos() {
  const { photos } = useContext(Context);

  const imgElements = photos.map((img, i) => {
    return <Image key={img.id} img={img} className={getClass(i)} />;
  });

  return <div className="photos-container">{imgElements}</div>;
}
