import { useEffect, useState } from "react";
import SongsApi from './../api/songs-api';

const useFetchSongs = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchSongs = async () => {
        try {
            // TODO: here should be some kind of a response
            const songs = await SongsApi.fetchSongs();
            setSongs(songs) // TODO: therefore here will be response.data.songs --> kinda like this
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchSongs(); // TODO: calling an async expression
    }, []);

    return { songs, isLoading, error };
}

export default useFetchSongs;