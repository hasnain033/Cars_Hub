import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters : FilterProps) {

    const {manufacturer, model, year, limit, fuel} = filters

    const headers = {
        'X-RapidAPI-Key': '5e6b8452b6mshd3298aa8aad1d13p1f4209jsn85734d51ab46',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{headers:headers})

    const result = await response.json()

    return result
    
}

export const updateSearchParams = (type:string,value:string) => {
    
    const searchParams = new URLSearchParams(window.location.search)
    console.log(window.location)
    console.log(searchParams)

    searchParams.set(type,value)

    console.log(searchParams)

    const newPathname = `${window.location.pathname}?${
        searchParams.toString()
    }`

    console.log(newPathname)

    return newPathname
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarModel = (car : CarProps, angle?:string) => {
    
    const url = new URL('https://cdn.imagin.studio/getimage')

    const {make, year, model} = car

    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullScreen')
    url.searchParams.append('modelYear',`${year}`)
    url.searchParams.append('angle', `${angle}`)
    return `${url}`
}