import { ReactComponent as Play } from '../assets/svg/play.svg';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import useHover from './../hooks/useHover';

const SongCard = ({ name, author, image, id }) => {
    const { hover, onMouseEnter, onMouseLeave } = useHover();
    const navigate = useNavigate();

    const onPlayClick = useCallback(() => {
        navigate(`/songs/${id}`);
    }, []);

    return (
        <div className="w-full max-w-[280px] bg-bold-red text-white rounded">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="w-full relative">
                <div
                    className='w-full min-h-[200px] bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: image }}
                />
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