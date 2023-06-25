import { IGame } from "../../interfaces/Game";

export default function filterGenre (filteredGames:IGame[], genresSelect:string ):IGame[] {
    return filteredGames.filter(current => {
        const genreLowerCase = current.genre.toLowerCase();
        const SelectedLowerCase = genresSelect.toLowerCase();

        if(genresSelect && SelectedLowerCase.toLowerCase() === genreLowerCase){
            return current;
             
        }else if(!genresSelect){
            return current; 

        };

        return null;        
    });

};