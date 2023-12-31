import Image from "next/image"
import Hero from "@/components/Hero"
import SearchBar from "@/components/SearchBar"
import CustomFilter from "@/components/CustomFilter"
import CarCard from '@/components/CarCard'
import Showmore from "@/components/Showmore"
import { fetchCars } from "@/utils"
import { fuels, yearsOfProduction } from "@/constants"
import { HomeProps } from "@/types"

async function Home({searchParams}:HomeProps) {
  const allCars = await fetchCars({
    manufacturer:searchParams.manufacturer || '',
    year:searchParams.year || 2022,
    model:searchParams.model || '',
    limit:searchParams.limit || 10,
    fuel:searchParams.fuel || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Cataloge</h1>
          <p>Explore the cars, you might like.</p>
          <div className="home__filters">
            <SearchBar/>
            <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction}/>
          </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars.map((car)=> <CarCard car={car}/>)}
              </div>
              <Showmore 
              pageNumber={(searchParams.limit || 10)/10} 
              isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) 
          : 
          (
            <div className='home__error-container'>
            <h1 className="text-black text-xl font-bold">Oops, No Cars</h1>
            <p>{allCars?.message}</p>
            </div>
          )}    
        </div>
      </div>
    </main>
  )
}

export default Home