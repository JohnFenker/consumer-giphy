export const getGifs = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=yM6CGrUo9r44LuqZxFD5O1pWxRtLfSJJ&limit=10&q=${encodeURI(category)}&offset=${Math.floor(Math.random() * 4999) + 1}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}