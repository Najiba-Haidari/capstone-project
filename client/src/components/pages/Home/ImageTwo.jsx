import { Parallax } from 'react-parallax';
import Imageother from '../../../assets/photo-1623200216581-969d9479cf7d.avif'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Imageother}  strength={800}>
        <div className='content'>
            <span className='img-txt'>
            Achieve Your Fitness Goals with Tailored Routines
            </span>
        </div>
    </Parallax>
);

export default ImageTwo;