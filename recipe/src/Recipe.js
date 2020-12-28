import React from 'react'
import style from './recipes.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ol>
                {
                    ingredients.map((ingredient) =>(
                        <li>{ingredient.text}</li>
                    ))
                }
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="images" />
        </div>
    )
}

export default Recipe
