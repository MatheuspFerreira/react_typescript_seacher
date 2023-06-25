import { IGame } from "../../../interfaces/Game";

export interface ICardProps {
    loading:boolean;
    error:boolean;
    games:number;
    filteredGames:number;
    filteredGenres:IGame[];
    searcher:string;
    
};