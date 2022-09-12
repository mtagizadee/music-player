import { useRef } from 'react';
import useFetchSongs from './../../hooks/useFetchSongs';
import Logo from './../../components/Logo';

{/* <audio ref={songRef}>
                <source src={require('../../ost.mp3')} />
                Your browser does not support the audio element
            </audio>
            <button onClick={onClick}> Play </button> */}

const Home = () => {
    const { songs, isLoading, error } = useFetchSongs();

    return (
        <div className="center-content full-screen font-bold flex-col">
            <Logo />
        </div>
    );
}

export default Home;