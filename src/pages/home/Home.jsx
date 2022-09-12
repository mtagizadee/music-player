import useFetchSongs from './../../hooks/useFetchSongs';
import Loader from '../../components/Loader';
import LayOut from '../../components/layout';

{/* <audio ref={songRef}>
                <source src={require('../../ost.mp3')} />
                Your browser does not support the audio element
            </audio>
            <button onClick={onClick}> Play </button> */}

const Home = () => {
    const { songs, isLoading, error } = useFetchSongs();

    if (isLoading) return <Loader />

    return (
        <LayOut>
            <div className="w-full h-screen p-6">

            </div>
        </LayOut>
    );
}

export default Home;