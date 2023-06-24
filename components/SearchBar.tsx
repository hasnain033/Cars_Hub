'use client'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({otherClasses}:{otherClasses:string}) =>{
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
      src='/magnifying-glass.svg'
      alt='car model'
      width={40}
      height={40}
      className='object-contain'
      />
    </button>
  )
}

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()

    // const setManufacturer = (manufacturer:string) =>{
    //   setmanufacturer(manufacturer)
    // }

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(manufacturer==='' && model===''){
        return alert('Please fill the bar')
      }

      updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase())

    }

const updateSearchParams=(manufacturer:string, model:string)=>{
  const searchParams= new URLSearchParams(window.location.search)

  if(model){
    searchParams.set('model', model)
  } else {
    searchParams.delete('model')
  }

  if(manufacturer){
    searchParams.set('manufacturer', manufacturer)
  } else {
    searchParams.delete('manufacturer')
  }

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  router.push(newPathName)
}



  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className='searchbar__item'>
          <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='model icon'
          />
          <input
          type='text'
          name='model'
          value={model}
          placeholder='tiguan'
          className='searchbar__input'
          onChange={(e)=> setModel(e.target.value)}
          />
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar
