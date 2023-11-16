import {restaurantList} from '../config';
import Bodycard from './Bobycard';
import React, { useState } from 'react';

function filterData(searchInput,restaurants){
    const filterData = restaurants.filter((restaurant)=>
         restaurant.data.name.includes(searchInput)
    )
    return  filterData;
}

function Cardlist(){
    const [restaurants,setRestaurants] = useState(restaurantList);
    const [searchInput,setSearchInput] = useState(" ");
    return(
        <React.Fragment>
            <div className='search-container container d-flex'>
                <div>
                    <input type='text'
                    className='search-input form-control' 
                    placeholder='search'
                    value={searchInput}
                    onChange ={(e)=> {
                        setSearchInput(e.target.value);
                        }
                    }
                    />
                </div>
                 <div>
                    <button type="button" className="btn-search btn btn-primary" onClick={()=>{
                        const data  = filterData(searchInput,restaurants);
                        setRestaurants(data);
                    }}>search</button>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='menucard'>
                    {
                        restaurants.map((restaurant)=>{
                            return <Bodycard {...restaurant.data} key={restaurant.data.id}/>
                        })
                    }
            </div>
            </div> 
        </React.Fragment>
    )
}
export default Cardlist;