import * as React from 'react';
import Label from './Label';

const Card = ({data}) => {
    function NavToProjDetail()
    {

    }
    const path_to_image = require("./Assets" + data.image_path);
    return ( 
    <div className='card'>
        <div className='imageWrapper'>
        <img src={path_to_image} alt={data.image_path}/>
        </div>
        <div>
        <div className='title'>{data.name}</div>
        {data.tags.map((tag) => <Label text={tag}></Label>)}
        <div className='cart_text'>{data.date}</div>
        <div className='cart_text'>{data.summary}</div>
        {data.details_path!=="" && <div className='read_more' onClick={NavToProjDetail}>Read More →</div>}
        </div>
    </div> );
}
 
export default Card;