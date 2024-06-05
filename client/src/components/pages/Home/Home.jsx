import './Home.css';
import ImageOne from "./ImageOne.jsx";
import ImageTwo from "./ImageTwo.jsx";
import ImageThree from "./ImageThree.jsx";
import TextBox from './TextBox.jsx';
import TextBoxTwo from './TextBoxTwo.jsx';


export default function Home(){
    return (
        <div >
            <ImageOne/>
            <TextBox/>
            <ImageTwo/>
            <TextBoxTwo/>
            <ImageThree/>
        </div>
    )
}