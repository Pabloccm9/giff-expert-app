
export const getGifs = async ( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=edfdNVd5jokvgW8UAuYt5L62vEcn2Ic2`;
    const respuesta = await fetch( url );
    const {data} = await respuesta.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }        
    })
    console.log(gifs);
    return gifs ;
}