async function getAllGames ():Promise<Response>{

    try {   
        const response = await fetch(`https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/`,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'dev-email-address':'matheus@gmail.com'
                    
            }   
        })   

        return response; 
        
    } catch (error) {
       throw new Error(`${error}`)
        
    };

}



export default getAllGames ;



