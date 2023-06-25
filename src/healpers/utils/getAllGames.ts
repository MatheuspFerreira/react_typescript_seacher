import { IGame } from "../../interfaces/Game";
import { getGenres } from "./get-genres";
import getAllGames from "../../api/games/getAll-games";
import timeOutPromise from "./timeOutPromise";
import { IGetAllGame } from "../../interfaces/GetAllGames";

const erros = [500, 502, 503, 504, 507, 508, 509];
const credential = 'matheus@gmail.com'

export default async function getAllGamesData ({setLoading, setError, setGames, setGenres}:IGetAllGame)  {
    setLoading(true);           
    setError({
        state:false,
        msg:''
    })
     
   try {
        const apiCallPromise = getAllGames(credential);
        const response = await Promise.race<boolean | Response>([timeOutPromise, apiCallPromise]);

        if(response instanceof Response && response.ok) {
            const res:IGame[] =  await response.json();
                          
            setGames(res);
            setGenres(getGenres(res));
            setLoading(false);
                                                
        }else if(!response) {                                    
            setError({
                state:true,
                msg:'O servidor demorou para responder, tente mais tarde.'
            })
            
        }else if(response instanceof Response && erros.includes(response.status)){  
            setError({
                state:true,
                msg:'O servidor falhou em responder, tente recarregar a página.'
            })                               

        }else {
            setError({
                state:true,
                msg:'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde.'
            })                                     
            
        }
        setLoading(false);  
        
                                                         
    } catch (error) {
        console.log('Ocorreu um erro ao obter os dados dos jogos:', error);
        setLoading(false);   

    };
    
    
};