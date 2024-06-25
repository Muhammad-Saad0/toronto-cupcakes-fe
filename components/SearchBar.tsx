import React from 'react';
import Dropdown from './Dropdown';
import { CupcakeCategoryType } from '@/types/types';

interface SearchBarProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    setSearchType: React.Dispatch<React.SetStateAction<CupcakeCategoryType>>
    searchType: CupcakeCategoryType
}

const SearchBar: React.FC<SearchBarProps> = ({setSearchQuery, setSearchType, searchType}) => {
    return (
        <div className='flex justify-center items-center gap-4 py-10 px-3 sm:px-64 font-averia sm:text-xl sm:font-semibold'>
            <Dropdown setSearchType = {setSearchType} searchType = {searchType}/>
            <div className="flex justify-center flex-1"> 
                <input
                    className='flex-grow px-5 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#3D0C11] focus:ring-1 focus:ring-[#3D0C11]'
                    placeholder='Search for Cupcakes'
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
                {/* <button
                    className="px-6 py-2.5 bg-[#D14D72] text-white font-medium uppercase rounded shadow-md hover:bg-[#3D0C11] active:bg-white active:text-[#3D0C11] transition duration-150 items-center flex gap-2"
                    type="button"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        className="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                    </svg>
                    Search
                </button> */}
            </div>
        </div>
    );
}

export default SearchBar;
