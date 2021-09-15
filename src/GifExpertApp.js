import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => { 
    const [categories, setCategories] = useState(['Goku']);
    //const handleAdd = () => {
    //     setCategories([...categories, 'Hunters']);
    //};
    return (
        <>
            <h2>Giphy API Consumer</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    //categories.map( category =>{
                    //    return <li key={ category }>{ category } </li>
                    //})
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
