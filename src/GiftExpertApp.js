import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import GiftGrid from './Components/GiftGrid'


const GiftExpertApp = ({defaultCategories = []}) => {

    

    const [categorias, setCategorias] = useState(defaultCategories)

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategory = {setCategorias} />
            <hr/>
            <ol>
                {categorias.map(cat=> 
                    <GiftGrid
                        key={cat} 
                        category={cat}  
                    />)
                }
            </ol>
        </>
    )
}


export default GiftExpertApp
