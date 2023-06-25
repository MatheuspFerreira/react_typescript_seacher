import { Tooltip } from "antd"
import { handleFormattedGenre } from "../../healpers/utils/formattedGenre";
import { ISelectProps } from "./interface/SelectProps";


export default function Select ({ 
    placement, title, name, className, onChange, selectedValue, options, placeholder }:ISelectProps) {
    return (
        <Tooltip 
            placement={placement} 
            title={title}
        >
            <select 
                name={name}
                onChange={event => onChange(event.target.value)}
                className={className}
                value={selectedValue}

            >
                <option>
                    {placeholder}                                     
                </option>

                {           
                    options.map((current:string, index) =>{
                        return(
                            <option key={index}>
                                {handleFormattedGenre(current)}                                       
                            </option>
                        )

                    })                          
                }
                                                  
            </select> 
        </Tooltip>
    )
}