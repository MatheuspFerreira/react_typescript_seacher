import { IGame } from "../../interfaces/Game";

export default function filterTitle (games:IGame[], searcher:string ):IGame[] {
    return  games.filter(current => {
        const titleLowerCase = current.title.toLowerCase();
        const searcherLowerCase = searcher.toLowerCase();
    
        if(searcherLowerCase && titleLowerCase.includes(searcherLowerCase)){
            return current;
    
        }else if(!searcher){
    
            return current       
        };
    
        return null
    
    });
}