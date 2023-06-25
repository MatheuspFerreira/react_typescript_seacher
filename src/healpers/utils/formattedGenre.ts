export const handleFormattedGenre = (genre:string) => {
    const genreLower = genre.toLowerCase();
    const formattedGenre = genreLower[0].toUpperCase() + genreLower.slice(1);

    const words = formattedGenre.split(' ');

    if (words.length === 2) {
        words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    }

    return words.join(' ');  
   
};