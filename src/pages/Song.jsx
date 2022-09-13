import { useParams } from 'react-router';
import LayOut from './../components/layout/index';
import useFetchSong from './../hooks/useFetchSong';
import Loader from './../components/Loader';
import useHover from './../hooks/useHover';
import { ReactComponent as Play } from '../assets/svg/play.svg';
import { ReactComponent as Pause } from '../assets/svg/stop.svg';
import useSong from './../hooks/useSong';
import { useRef } from 'react';
import helpers from '../helpers';
import useColorThief from './../hooks/useColorThief';

const Song = () => {
    const { id } = useParams();
    const { song, isLoading, error } = useFetchSong(parseInt(id));

    if (isLoading) return <Loader />

    return (
        <LayOut>
            <Content song={song} />
        </LayOut >
    );
}

/*
    I had to move almost all the component to the new one just because of useColorThief hook, in order to make sure
    that song will be always defined and colorThief will be able to do its work with an image if you try to get rid of the
    Content component and move everything into Song component, you will notice that it is impossible to fix hooks rendering
    problem.
*/
const Content = ({ song }) => {
    const { color, isColorLoading } = useColorThief(song.image);
    const { hover, onMouseEnter, onMouseLeave } = useHover();
    const songRef = useRef({});
    const { isPlaying, play, pause, duration, currentTime } = useSong(songRef);

    if (isColorLoading) return <Loader />

    return (
        <div
            className='p-6 h-[89vh] flex justify-center rounded'
            style={{
                backgroundColor: `rgb(${color.r},${color.g},${color.b})`
            }}
        >
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='relative w-full max-w-[800px]'>
                <div
                    style={{ backgroundImage: `url(${song.image})` }}
                    className='bg-cover bg-no-repeat bg-center w-full h-full rounded'
                />
                <div className='shadow' />
                {hover &&
                    <>
                        <div className='w-full h-full top-0 absolute'>
                            <div onClick={!isPlaying ? play : pause} className='w-full h-full center-content clickable'>
                                {!isPlaying ?
                                    <Play className='fill-white' /> :
                                    <Pause className='fill-white' />
                                }
                            </div>
                        </div>
                        <div className='w-full absolute bottom-0 p-3 text-white flex items-center justify-between px-6 xs:px-12'>
                            <div>
                                <h3 className='text-xl'> {song.name} </h3>
                                <p className='text-black-red'> {song.author} </p>
                            </div>
                            <div>
                                {helpers.fixSongTime(currentTime)} / {helpers.fixSongTime(duration)}
                            </div>
                        </div>
                    </>
                }
            </div>
            <audio ref={songRef}>
                <source src={song.audio} />
                Your browser does not support the audio element
            </audio>
        </div>
    )
}

export default Song;