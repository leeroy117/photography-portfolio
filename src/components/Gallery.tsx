import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

interface Props {
    photos: any[];
}

function Gallery({ photos } : Props ) {
    const [index, setIndex] = React.useState(-1);

    return ( 
        <>
            <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={250}
                onClick={({ index: current }) => {
                    console.log("🚀 ~ Gallery ~ r:", current)
                    setIndex(current);
                }}
            />

            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>
     );
}

export default Gallery;