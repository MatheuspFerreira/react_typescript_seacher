import { TooltipPlacement } from "antd/es/tooltip";

export interface IInputProps {
    placement:TooltipPlacement;
    title:string;
    type:string;
    name:string;
    className:string;
    searcher:string;
    setSearcher:(value:string) => void;
    placeholder:string;

};