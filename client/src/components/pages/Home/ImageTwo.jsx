import { Parallax } from 'react-parallax';
import Imageother from '../../../assets/photo-1522898467493-49726bf28798.avif'



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