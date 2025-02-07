import { useEffect, useRef } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const images = [
    {
        id: 1,
        src: '/img/IMG_8532_difuminado_smaller.jpg',
        srcSet: "/img/IMG_8532_difuminado_smaller.jpg 400w, /img/IMG_8532_difuminado_small.jpg 600w, /img/IMG_8532_difuminado_medium.jpg 1200w, /img/IMG_8532_difuminado_large.jpg 1920w"
    },
];

interface IImage {
    id: number;
    src: string,
    srcSet: string | undefined;
}

interface IProps {
    images: IImage[];
}
function Mansory({images}: IProps) {
    console.log("🚀 ~ Mansory ~ images:", images)
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(imgRef.current) {
            console.log('imgRef', imgRef.current.currentSrc)
        }
    },[])

    return ( 
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 3, 900: 4}}
                // gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
                
            >
                <Masonry className="flex flex-wrap gap-4" gutter="2">
                    {/* <ChildA />
                    <ChildB /> */}
                    {/* Children */}
                    {/* <ChildY />
                    <ChildZ /> */}
                    {images.map((img) => (
                        <img 
                            ref={imgRef}
                            className="shadow-lg rounded-sm" 
                            key={img.id} 
                            src={img.src} 
                            alt="masonry" 
                            srcSet={img.srcSet}
                            sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 1200px) 1200px, 1920px"
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
     );
}

export default Mansory;