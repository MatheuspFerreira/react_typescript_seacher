export interface IFilterProps {
    searcher:string;
    setSearcher: (value:string) => void;
    options:string[]
    onChangeSelect:(value:string) => void;
    selectedValue:string;

};