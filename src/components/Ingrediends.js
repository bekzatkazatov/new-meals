import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Ingrediends = () => {
    const params = useParams()
    const [category, setCategory] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get(`https://themealdb.com/api/json/v1/1/filter.php?i=${params.ingreName}`)
            .then(({data}) => {
                setCategory(data.meals);
            })
    }, []);

    return (
        <div className={'container'}>
            <button style={{backgroundColor: "#4CAF50", borderRadius: "40px", color: "white",padding:"13px 20px",border:"none"}}
                    onClick={ () => navigate(-1)}> Go Back </button>
            <h1> Meals with {params.ingreName} </h1>
            <div className={'row'}>
                {category.map((meal) => (
                    <div className={'col-4'}>
                        <Link to={`/category/meals/${meal.idMeal}`} >
                            <div className={'box'}>
                                <img src={meal.strMealThumb} alt="" width={250}/>
                                <h3 style={{
                                    fontSize: 30,
                                    color: "white"
                                }}>{meal.strMeal}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ingrediends;