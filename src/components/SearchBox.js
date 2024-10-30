import React from 'react';

const SearchBox = ({searchfeild, searchChange})=>{
    return(
        <div className='pa3 tc'> 
            <input className='pa3 bg-lightest-blue f3 tc'
            type='search' placeholder='search robots...' 
            onChange={searchChange}
            />
            
        </div>
    );
}
export default SearchBox; 