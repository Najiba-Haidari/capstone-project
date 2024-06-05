import { Parallax } from 'react-parallax';
import ImageFit from '../../../assets/photo-1522898467493-49726bf28798.avif'


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