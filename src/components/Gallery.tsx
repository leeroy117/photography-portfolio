import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

interface Props {
    photos: any[];
}

function Gallery({ photos } : Props ) {
    const [index, setIndex] = React.useState(-1);

    return ( 
        <div className="pb-4">
            <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={380}
                sizes={{
                    size: "1168px",
                    sizes: [
                      { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
                    ],
                }}
                onClick={({ index: current }) => {
                    console.log("🚀 ~ Gallery ~ r:", current)
                    setIndex(current);
                }}
                skeleton={<div style={{ width: "100%", minHeight: 800 }} />}
            />

            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
                plugins={[Zoom]}
            />
        </div>
     );
}

export default Gallery;