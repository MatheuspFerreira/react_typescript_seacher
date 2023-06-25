import { Button, Result } from "antd";
import { IResultsProps } from "./interface/ResultsProps";
import Loader from "../loader/Loader";
import './results.css';



export default function Results ({ loading, error, games, msg, onClick}:IResultsProps) {
    return(
        <div className={ !loading && !error ? '--Disabled' : ""}>
            { 
                loading
                &&
                <div className="Results__loader">
                    <Loader
                        text="Por favor, aguarde..."
                    />

                </div>
                
            }
            {
                error && games === 0
                &&             
                <Result
                    status="error"
                    title="Falha no Envio!"
                    subTitle={msg}
                    extra={[
                        <Button 
                            type="primary" 
                            key="console"
                            onClick={onClick}
                        >
                            Recarregar
                        </Button>
                                              
                    ]}
                />
                                          
            }              

        </div>

    );
}