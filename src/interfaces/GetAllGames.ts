import { IError } from "./Error";
import { IGame } from "./Game";

export interface IGetAllGame {
  setLoading: (value: boolean) => void;
  setError: (value: IError) => void;
  setGames: (value: IGame[]) => void;
  setGenres: (value: string[]) => void;
  
};
