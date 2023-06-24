import { useEffect, useState } from "react";
import getAllGames from "../../api/games/getAll-games";
import { IGame } from "../../interfaces/Game.interface";
import timeOutPromise from "../../lib/healpers/timeOutPromise";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/card";
import './home.css';
import Filter from "../../components/Filter/Filter";


// Loading para thumbnails
export default function Home () {
    const [games, setGames] = useState<IGame[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searcher, setSearcher] = useState<string>('');
    

    useEffect (()=>{
        const getAllGamesData = async () => {
            const erros = [500, 502, 503, 504, 507, 508, 509];
            setLoading(true);
            
    
           try {
                const apiCallPromise = getAllGames();

                const response = await Promise.race<boolean | Response>([timeOutPromise, apiCallPromise]);

                if(response instanceof Response && response.ok) {
                    const res:IGame[] =  await response.json();
                    console.log(res)
                    
                    
                    setGames(res);
                  

                }else if(!response) {
                    console.log('O servidor demorou para responder, tente mais tarde.')
                   

                }else if(response instanceof Response && erros.includes(response.status)){
                   
                    console.log('O servidor fahou em responder, tente recarregar a página.')

                }else {
                    console.log('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde.')
                    
                    
                }  
                setLoading(false);
               
                
                
            } catch (error) {
                console.log('Ocorreu um erro ao obter os dados dos jogos:', error);
                setLoading(false);   

            };
            
            
        };

        getAllGamesData();

    },[])

    const filteredGames = games.filter(current => {
        const titleLowerCase = current.title.toLowerCase();
        const searcherLowerCase = searcher.toLowerCase();

        if(searcherLowerCase && titleLowerCase.includes(searcherLowerCase)){
            return current;

        }else if(!searcher){

            return current       
        };

    });

    


    return (
        <div className="Home__container">
            <div className={ !loading ? '--Disabled' : "Home__healpers"}>
                { 
                    loading
                    &&
                    <Loader
                        text="Please, wait..."
                    />
                }

            </div>         

            <div className="Home__content">
                <Filter
                    searcher={searcher}
                    setSearcher={setSearcher}
                
                />
                
                <div className="Home__CardsContainer">

                    {
                        games.length > 0 && filteredGames.length !== 0
                        
                        ?

                        filteredGames.map(current => {   

                           return <Card
                                key={current.id}
                                title={current.title}
                                thumbnail={current.thumbnail} 
                                developer={current.developer} 
                                platform={current.platform} 
                                genre={current.genre}                                

                            /> 

                        })

                        :

                        <div className="Home__cardNotFound">
                            {
                                searcher 
                                && 
                                <p>
                                    Sorry, we couldn't find any games with the title <span>{searcher}</span>.
                                </p>
                            }
                        </div>

                    }

                </div>
                
            </div>
            
        </div>
    );

}


