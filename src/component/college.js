import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import axios from 'axios';
import Image from './image';


const College = ()=>{
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [imgCount, setImgCount] = useState(0);
    const [incrementFlag, setIncrementFlag] = useState(null);
    const [fullImgView, setFullImgView] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    

    const handlePhotoIndex = (val) => {
        setPhotoIndex(val);
    }
    const handleFullImgView = val=>{
        setFullImgView(val)
    }
    const addImage =()=>{
        let url = "http://via.placeholder.com/200x200?text="+ imgCount;
        
        if(images.length <301){
            setImgCount(imgCount+1);
        setImages([...images,url]);
        
        setIsLoading(true);
        }
        if(imgCount<22){
            setIncrementFlag(imgCount);
        }
        
    }
    useEffect(()=>{
        addImage();
    },[incrementFlag])
    useEffect(()=>{
        console.log(photoIndex);
    },[photoIndex])
  

    return(
        <div className="hero is-fullheight is-bold is-info">
            <div className="hero-body">
                <div className="container">
                    <div className="header content">
                                <h1 className="subtitle is-6">Image College</h1>
                               
                    </div>
                    <InfiniteScroll
                        dataLength={images}
                        next={() => addImage()}
                        hasMore={true}
                        loader={
                            <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>}
                    >
                            <div className="image-grid" style={{ marginTop: "30px" }}>
                                {isLoading ?
                                    images.map((image, index) => (
                                        <Image url={image} key={index} images={images} photoIndex={photoIndex} fullImgView={fullImgView} handlePhotoIndex={(e)=>handlePhotoIndex(e)} handleFullImgView={(e)=>handleFullImgView(e)} />
                                    )): ""}
                            </div>
                    </InfiniteScroll>    

                </div>
            </div>
        </div>

    )
}

export default College;