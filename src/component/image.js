import { useEffect, useState } from "react";
import {Link, BrowserRouter} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
const Image = props =>{
    const [fullImgView, setFullImgView] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    const viewFullImage = (val) =>{
       // props.handleFullImgView(val);
       setFullImgView(val);
    }
    const getKey = e =>{
       setPhotoIndex(e.target.getAttribute('src').split("=")[1]);
      // props.handlePhotoIndex(e.target.getAttribute('src').split("=")[1]);
        console.log(photoIndex);
    }
    
    
    return(
    <div className="image-item" key={props.key} data-index="x" >
        
            <img src={props.url} onClick={(e) => {
        viewFullImage(true);
        getKey(e)
        
    
    }}  />
       
        {fullImgView && (
         
          <Lightbox
            mainSrc={"http://via.placeholder.com/2000x2000?text="+photoIndex}
            nextSrc={"http://via.placeholder.com/2000x2000?text="+(photoIndex + 1) % props.images.length}
            prevSrc={"http://via.placeholder.com/2000x2000?text="+(photoIndex + props.images.length - 1) % props.images.length}
            onCloseRequest={() => setFullImgView(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(+photoIndex - +1
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex(+photoIndex + +1 
              )
            }
            toolbarButtons	= {[
              <a href={"http://via.placeholder.com/3900x3900?text="+photoIndex} target="_blank" download >Download</a>

            ]}
          />
         
        )}
   </div>
    )
}
export default Image;
