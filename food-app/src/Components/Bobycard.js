import {IMG_CDN_URL} from '../config';
import {restaurantList} from '../config';
 
const RestouratCard =({
  cloudinaryImageId,
  name,
  area,
  cuisines
})=>{
  return(
    <div className='mt-5'>
      <div className="card" style={{width:300,height:400}}>
          <img src={IMG_CDN_URL+cloudinaryImageId} className='catd-img-top'/>
          <div className="card-header">{name}</div>
          <div className="card-body">{cuisines.join(", ")}</div>
          <div className="card-footer">{area}</div>
        </div>
    </div>
  )
}

export default RestouratCard;