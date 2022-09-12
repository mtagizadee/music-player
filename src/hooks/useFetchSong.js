import { useState } from 'react';
import SongsApi from './../api/songs-api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useFetchSong = (id) => {
    const [song, setSong] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchSong = async () => {
        try {
            const song = await SongsApi.fecthSong(id);
            setSong(song);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!id) {
            navigate('/error');
        } else {
            fetchSong();
        }
    }, []);

    return { song, isLoading, error };
}

export default useFetchSong;