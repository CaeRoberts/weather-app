import React from 'react'

type Props = {
    location: string
    setLocation: (location: string) => void
}

function Searchbar({location, setLocation}: Props) {

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    }

  return (
    <div className="flex flex-row gap-4 w-full">
        <input value={location} onChange={(e) => handleTypeChange(e)}  type="text" placeholder="Search" className="w-full h-10 bg-white text-black p-2 rounded-md" />
        <button className="bg-white text-black p-2 rounded-full w-fit min-w-10">{'>'}</button>
    </div>
  )
}

export default Searchbar