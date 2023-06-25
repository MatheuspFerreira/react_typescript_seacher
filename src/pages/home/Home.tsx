import { useEffect, useState } from "react";
import { IGame } from "../../interfaces/Game";
import { IError } from "../../interfaces/Error";
import Card from "../../components/card/card";
import Filter from "../../components/filter/Filter"
import Results from "../../components/results/Results";
import filterTitle from "../../healpers/game/filter-title";
import filterGenre from "../../healpers/game/filter-genre";
import getAllGamesData from "../../healpers/utils/getAllGames";
import './home.css';


export default function Home () {
    const [games, setGames] = useState<IGame[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searcher, setSearcher] = useState<string>('');
    const [genres, setGenres] = useState<string[]>([]);
    const [genresSelect, setGenresSelect] = useState<string>('');
    const [error, setError] = useState<IError>({
        state:false,
        msg:''
    }); 

    useEffect (()=>{     
        getAllGamesData({setLoading, setError, setGames, setGenres});

    },[]);

    const filteredGames = filterTitle(games, searcher);
    
    const filteredGenres = filterGenre(filteredGames, genresSelect);

    function handleReload() {
        window.location.reload();
    };


    return (
        <div className="Home__container">
            <Filter
                searcher={searcher}
                setSearcher={setSearcher}
                options={genres}
                onChangeSelect={setGenresSelect}
                selectedValue={genresSelect}
                
            />

            <Results
                loading={loading}
                error={error.state}
                msg={error.msg}
                games={games.length}
                onClick={handleReload}

            />

            <Card
                loading={loading}
                error={error.state}
                games={games.length}
                filteredGames={filteredGames.length}
                filteredGenres={filteredGenres}
                searcher={searcher}
                
            />
                                
        </div>
    );

}


