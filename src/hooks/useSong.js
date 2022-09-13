import { useState, useEffect } from 'react';

const useSong = (ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(ref.current.duration);
    const [currentTime, setCurrentTime] = useState(0);

    // TODO: look at this
    useEffect(() => {
        setDuration(ref.current.duration);
    }, []);

    const play = () => {
        ref.current.play();
        setIsPlaying(true);
    }

    const pause = () => {
        ref.current.pause();
        setIsPlaying(false);
    }

    const updateCurrentTime = () => {
        setCurrentTime(ref.current.currentTime)
    }

    return { play, pause, isPlaying, duration, currentTime, updateCurrentTime };
}

export default useSong;