import { ICardProps } from "./interface/CardProps";
import { handleFormattedGenre } from "../../healpers/utils/formattedGenre";
import './card.css'


export default function Card ({ loading, error, games, filteredGames, filteredGenres, searcher  }:ICardProps) {

    return(
        <div className={(loading || error) && games === 0 ? '--Disabled':"Card__container"}>

                {
                    games > 0 && filteredGames !== 0
                        
                    ?

                    filteredGenres.map((current, index) => { 
                        return(
                            <div className="Card__content" key={index}>
                                   
                                <div className="Card__contentImg">
                                    <h3>
                                        {current.title}
                                    </h3>                                         

                                    <img 
                                        src={current.thumbnail} 
                                        alt={`Thumbnail - ${current.title}`} 
                                                                
                                    />
                                                                        
                                </div>  
                                                    
                                <div className="Card__descriptions">
                                    <ul>
                                        <li>
                                            <p>
                                                Desenvolvedor: {current.developer}
                                            </p>

                                        </li>  

                                        <li>
                                            <p>
                                                Plataforma: {current.platform}
                                            </p>

                                        </li>

                                        <li>
                                            <p>
                                                Gênero: {handleFormattedGenre(current.genre)}
                                            </p>

                                        </li>
                                                                                                    
                                    </ul>

                                </div>

                            </div>
                        )
                           
                    })

                    :

                    <div className="Card__notFound">
                        {
                            searcher 
                            && 
                            <p>
                                Desculpe, não encontramos nenhum jogo com o nome de <br/>  
                                <span>{searcher}</span>
                            </p>
                        }
                    </div>

                }

        </div> 
        

    );
}