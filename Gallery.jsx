import React, { useState } from 'react';
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import img1 from './Images/Images (1).jpeg';
import img2 from './Images/Images (2).jpeg';
import img3 from './Images/Images (3).jpeg';
import img4 from './Images/Images (4).jpeg';
import img5 from './Images/Images (5).jpeg';
import img6 from './Images/Images (6).jpeg';
import img7 from './Images/Images (7).jpeg';
import img8 from './Images/Images (8).jpeg';
import img9 from './Images/Images (9).jpeg';
import img10 from './Images/Images (10).jpeg';
import img11 from './Images/Images (11).jpeg';
import img12 from './Images/Images (12).jpeg';
import img13 from './Images/Images (13).jpeg';
import img14 from './Images/Images (14).jpeg';
import img15 from './Images/Images (15).jpeg';

const Gallery = () => {

    let data= [
        {
            id : 1,
            imgScr : img1, 
        },
        {
            id : 2,
            imgScr : img2, 
        },
        {
            id : 3,
            imgScr : img3, 
        },
        {
            id : 4,
            imgScr : img4, 
        },
        {
            id : 5,
            imgScr : img5, 
        },
        {
            id : 6,
            imgScr : img6, 
        },
        {
            id : 7,
            imgScr : img7, 
        },
        {
            id : 8,
            imgScr : img8, 
        },
        {
            id : 9,
            imgScr : img9, 
        },
        {
            id : 10,
            imgScr : img10, 
        },
        {
            id : 11,
            imgScr : img11, 
        },
        {
            id : 12,
            imgScr : img12, 
        },
        {
            id : 13,
            imgScr : img13, 
        },
        {
            id : 14,
            imgScr : img14, 
        },
        {
            id : 15,
            imgScr : img15,
        }
    ]

    const [model, setModel] = useState(false);
    const[tempimgScr, setTempImgScr] = useState('');

    const getImg = (imgScr) => {
        setTempImgScr(imgScr);
        setModel(true);
    }

    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgScr} />
            < CloseIcon onClick = {() =>{
                setModel(false);
            }} />
        </div>
        <div className="gallery">
            {data.map((item, index) =>{
                return(
                    <div className="pictures" key={index} onClick={() => getImg(item.imgScr)} >
                        <img src={item.imgScr} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery