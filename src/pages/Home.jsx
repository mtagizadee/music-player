import useFetchSongs from '../hooks/useFetchSongs';
import Loader from '../components/Loader';
import LayOut from '../components/layout';
import SongCard from '../components/SongCard';

const Home = () => {
    const { songs, isLoading, error } = useFetchSongs();

    if (isLoading) return <Loader />

    return (
        <LayOut>
            <div className="w-full p-6 flex flex-col items-center xs:grid gap-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {songs.map((song) =>
                    <div className='flex justify-center'>
                        <SongCard name={song.name} id={song.id} author={song.author} image={song.image} key={song.id} />
                    </div>
                )}
            </div>
        </LayOut>
    );
}

export default Home;