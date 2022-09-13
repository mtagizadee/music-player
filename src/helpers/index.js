const fixSongTime = (songTime) => {
    if (!songTime) return NaN;

    return parseFloat((songTime / 60).toFixed(2));
}

export default {
    fixSongTime
}