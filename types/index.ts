import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btntype?:"button"
    textStyles?:string
    rightIcon?:string
    isDisable?:boolean
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer:(manufacturer:string) => void;
}

export interface CarProps {
    city_mpg:number,
class:string,
combination_mpg:number,
cylinders:number,
displacement:number,
drive:string,
fuel_type:string,
highway_mpg:number,
make:string,
model:string,
transmission:string,
year:number,
}

export interface FilterProps {
    manufacturer:string;
    year:number;
    model:string;
    limit:number;
    fuel:string;
}

export interface HomeProps {
    searchParams:FilterProps
}

export interface CustomFilterProps {
    title:string;
    options:OptionsProps[]
}

export interface OptionsProps {
    title:string;
    value:string
}

export interface ShowmoreProps {
    pageNumber:number;
    isNext:boolean
}