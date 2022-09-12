import { useState } from 'react';

const useSong = (ref) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => {
        ref.current.play();
        setIsPlaying(true);
    }

    const pause = () => {
        ref.current.pause();
        setIsPlaying(false);
    }

    return { play, pause, isPlaying };
}

export default useSong;