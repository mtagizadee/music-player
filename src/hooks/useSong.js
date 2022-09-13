import { useState, useEffect } from 'react';

const useSong = (ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(ref.current.duration);
    const [currentTime, setCurrentTime] = useState(0);

    // TODO: look at this
    useEffect(() => {
        setDuration(ref.current.duration);
        if (isPlaying) {
            setInterval(() => {
                updateCurrentTime();
            }, duration - currentTime);
        }
    }, [isPlaying]);

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

    return { play, pause, isPlaying, duration, currentTime };
}

export default useSong;