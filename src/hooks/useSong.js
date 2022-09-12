import { useState } from 'react';

const useSong = (ref) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => {
        ref.current.play();
        setIsPlaying(true);
    }

    const stop = () => {
        ref.current.stop();
        setIsPlaying(false);
    }

    return { play, stop, isPlaying };
}

export default useSong;