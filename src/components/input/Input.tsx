import { Tooltip } from "antd";
import { IInputProps } from "./interface/InputProps";


export default function Input ({ placement, title, type, name, className, searcher, setSearcher, placeholder}:IInputProps) {
    return (
        <Tooltip 
            placement={placement} 
            title={title}
        >   
            <input 
                type={type} 
                name={name}
                className={className}
                placeholder={placeholder}               
                onChange={
                    event => setSearcher(event.target.value)
                }
                value={searcher}
                        
            />
        </Tooltip>
    )

}