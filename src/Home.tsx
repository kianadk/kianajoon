import pic from './picOfMe.jpg';
import './Home.css';

function Home() {
    return <div className='content'>
        <div>
            <h2>hello there</h2>
            <p>Welcome in! I'm Kiana. I like to make cute stuff that works well. Most of it is made of bits and pixels.</p>
            <p>The 'joon' in my site name refers to the affectionate Persian honorific. If we're not on that level yet, maybe we will be someday :-) </p>
        </div>
        <img src={pic} id='picOfMe'/>
    </div>;
}

export default Home;