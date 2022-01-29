import React from 'react';

const SearchBox = (props) => {
    return(
        <div className ='pa2' >
<input 
className ='pa2 ba b--blue bg-lightest-blue grow tc'
onChange = {props.seachChange}
type='search'
 placeholder='search'/>
</div>
    );
}
export default SearchBox;