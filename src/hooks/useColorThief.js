import { getColorFromURL } from "color-thief-node";
import { useEffect, useState } from 'react';

const useColorThief = (image) => {
    const [color, setColor] = useState({
        r: 0, g: 0, b: 0
    });
    const [isColorLoading, setIsColorLoading] = useState(true)

    const getColor = async () => {
        const color = await getColorFromURL(image);
        setColor({
            r: color[0],
            g: color[1],
            b: color[2]
        });
        setIsColorLoading(false);
    }

    useEffect(() => {
        getColor();
    }, []);

    return { color, isColorLoading };
}

export default useColorThief;