import { Input, Select, Tooltip } from "antd";
import './filter.css';



interface IFilterProps {
    searcher:string;
    setSearcher: (value:string) => void;


}


export default function Filter ({searcher, setSearcher}:IFilterProps) {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const handleSeach = (value:string) =>{
        console.log(value)
    }
      

    return (
        <div className="Filter__container">
            <div className="Filter__content">
                <Tooltip placement="left" title={'Select Genre to filter'}>

                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />

                </Tooltip>
                <Tooltip placement="bottom" title={'Enter the title to search'}>

                    <Input 
                        size="large" 
                        placeholder="Type to search..." 
                        prefix={''}
                        onChange={
                            event => setSearcher(event.target.value)
                        }
                        value={searcher}
                       
                         
                    />

                </Tooltip>

            </div>
                  

        </div>
        

    );

}