import React from 'react'
import categData from '../../data/CategoriesData'
import CategoriesItem from '../CategoriesItem/CategoriesItem'

const Categories = () => {
    return (
        <div className="grid grid-cols-3 py-20">
            {
                categData.map(item => {
                    return (
                        <CategoriesItem key={item.id} {...item} />
                    )
                })
            }
        </div>
    )
}

export default Categories
