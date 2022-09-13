import { useParams } from 'react-router';
import LayOut from './../components/layout/index';
import useFetchSong from './../hooks/useFetchSong';
import Loader from './../components/Loader';
import useHover from './../hooks/useHover';
import { ReactComponent as Play } from '../assets/svg/play.svg';
import { ReactComponent as Pause } from '../assets/svg/stop.svg';
import useSong from './../hooks/useSong';
import { useRef } from 'react';
import { useEffect } from 'react';
import helpers from '../helpers';

const Song = () => {
    const { id } = useParams();
    const { hover, onMouseEnter, onMouseLeave } = useHover();
    const { song, isLoading, error } = useFetchSong(parseInt(id));
    const songRef = useRef({});
    const { isPlaying, play, pause, duration, currentTime, updateCurrentTime } = useSong(songRef);


    useEffect(() => {
        if (isPlaying) {
            setInterval(() => {
                updateCurrentTime();
            }, duration - currentTime);
        }
    }, [isPlaying]);

    if (isLoading) return <Loader />



    return (
        <LayOut>
            <div className='p-6 h-[90vh] flex justify-center bg-bold-red'>
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
        </LayOut >
    );
}

export default Song;