import { Parallax } from 'react-parallax';
import ImageFit from '../../../assets/photo-1623200216581-969d9479cf7d.avif'


import './Home.css'
const ImageOne = () => (
    <Parallax className='image' bgImage={ImageFit}  strength={800}>
        <div className='content'>
            <span className='img-txt'>
    A journey for healthy body!
            </span>
        </div>
    </Parallax>
);

export default ImageOne;