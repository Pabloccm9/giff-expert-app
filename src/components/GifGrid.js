import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading} = useFetchGifs( category );

    console.log(images, loading);
     
    return (
    <>
        <h3 className="card animate__animated animate__fadeIn"> { category } </h3>

        { loading && <p className='card animate__animated animate__flash'>Loading</p>}

        <div className='card-grid'>
            {              
                images?.map( img => (
                    <GifGridItem 
                        key = {img.id}
                        { ...img}
                        />
                ))
            }
        </div>
    </>        
  )
}