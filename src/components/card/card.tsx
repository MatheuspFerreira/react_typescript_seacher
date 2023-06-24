import { ICardProps } from "./interface/CardProps";
import './card.css'



export default function Card ({ title, thumbnail, developer, platform, genre }:ICardProps) {

    return(
        <div className="Card__container">
                                   
            <div className="Card__contentImg">
                <h3>
                    {title}
                </h3>                                         

                <img 
                    src={thumbnail} 
                    alt={`Thumbnail - ${title}`} 
                                            
                />
                                                       
            </div>  
                                
            <div className="Card__descriptions">
                <ul>
                    <li>
                        <p>
                            Developer: {developer}
                        </p>

                    </li>  

                    <li>
                        <p>
                            Plataform: {platform}
                        </p>

                    </li>

                    <li>
                        <p>
                            Genre: {genre}
                        </p>

                    </li>
                                                                                
                </ul>

            </div>

        </div>

    );
}