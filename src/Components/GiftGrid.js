import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../Hooks/useFetchGifs'
import GiftGridItem from './GiftGridItem'

const GiftGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h2>{category}</h2>
        {loading && <p className="animate__bounce">'Cargando...'</p>  }
        
        <div className='card-grid animate__bounce' > 
            {
                images.map(img => 
                    <GiftGridItem 
                        key={img.id}
                        {...img} 
                    /> 
                )
            }
        </div>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GiftGrid
