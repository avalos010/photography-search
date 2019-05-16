import React from "react";
import Image from "./Image";



const ImageList = ({images}) => {
    <div>
        {images.map(img => <Image img={img} key={img.id} />}
    </div>
        }

export default ImageList;