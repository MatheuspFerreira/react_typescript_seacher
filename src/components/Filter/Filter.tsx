import { IFilterProps } from "./interface/FilterProps";
import Select from "../select/Select";
import Input from "../input/Input";
import './filter.css';



export default function Filter ({searcher, setSearcher, options, onChangeSelect, selectedValue}:IFilterProps) {

    const handleChange = (value: string) => {
        if(value === 'Filtrar por Gênero'){
            onChangeSelect('');
            return;
        };

        onChangeSelect(value);
        
    };
  

    return (
        <div className="Filter__container">
            <div className="Filter__content">
                <Select
                    placement={'bottom'}
                    title={"Selecione para filtrar"}
                    onChange={handleChange}
                    selectedValue={selectedValue}
                    options={options}
                    placeholder={'Filtrar por Gênero'}
                    name={"Genre"}
                    className={"Filter__select"}

                />

                <Input
                    placement={'bottom'}
                    title={"Digite para buscar"}
                    type={"text"}
                    name={"searcher"}
                    className={"Filter__seacher"}
                    setSearcher={setSearcher}
                    searcher={searcher}
                    placeholder={"Digite para buscar..."}

                />
                
            </div>
                  
        </div>   
    );

}