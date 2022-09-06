import { useRef } from 'react';

const Home = () => {
    const songRef = useRef();
    const onClick = () => {
        const song = songRef.current;
        song.play();
    }

    return (
        <div className="center-content full-screen font-bold flex-col">
            <audio ref={songRef}>
                <source src={require('../../ost.mp3')} />
                Your browser does not support the audio element
            </audio>
            <button onClick={onClick}> Play </button>
        </div>
    );
}

export default Home;