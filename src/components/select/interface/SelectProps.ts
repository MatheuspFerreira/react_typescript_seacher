import { TooltipPlacement } from "antd/es/tooltip";

export interface ISelectProps {
    placement:TooltipPlacement;
    title:string;
    name:string;
    className:string;
    onChange:(value:string) => void;
    selectedValue:string;
    options:string[];
    placeholder:string;

};