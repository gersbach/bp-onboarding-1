import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, ingredients, calories, image}) => {

    return(
        <>
            <div className={style.recipe}>
                <h1>{title}</h1>
                <ol>
                    <h1>{ingredients.map((ingredient)=>{
                        <li>
                            {ingredient.text}
                        </li>
                    })}</h1>
                </ol>
                <p>{calories}</p>
                <img className={style.image} src={image} alt=''/> 
                    <ol>
                    {ingredients.map((ingredient)=>(
                        <li>
                            {ingredient.text}
                        </li>
                    ))
                    }
                    </ol>
            </div>
        </>
    )

}

export default Recipe;