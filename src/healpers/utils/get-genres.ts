import { IGame } from "../../interfaces/Game";

export function getGenres(data:IGame[]) {
    const genres:string[] = [];

    for (let i = 0; i < data.length; i++) {
        if(!genres.includes(data[i].genre)){
            genres.push(data[i].genre);

        } ;  

    };

    return genres;

};