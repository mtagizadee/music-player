import { ReactComponent as Play } from '../assets/svg/play.svg';
import { useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const SongCard = ({ name, author, image, id }) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const onMouseEnter = useCallback(() => {
        setHover(true)
    }, []);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, [])

    const onPlayClick = useCallback(() => {
        navigate(`/songs/${id}`);
    }, []);

    return (
        <div className="w-full max-w-[200px] bg-bold-red text-white rounded">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="w-full relative">
                <img src={image} alt="song's image" />
                <div className="shadow" />
                {hover &&
                    <div className='absolute bottom-0 bg-black w-full bg-opacity-20 pt-1'>
                        <Play onClick={onPlayClick} className='ml-1 mb-1 fill-bold-red clickable' />
                    </div>
                }
            </div>
            <div className="p-3">
                <h3> {name} </h3>
                <div className="w-full h-[1px] bg-gray-300 my-1" />
                <p className="text-sm text-gray-300"> {author} </p>
            </div>
        </div>
    );
}

export default SongCard;