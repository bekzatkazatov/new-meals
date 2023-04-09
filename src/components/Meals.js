import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import CustomModalvideo from "./CustomModalvideo";



const Meals = () => {
    const params = useParams()
    const [category, setCategory] = useState([]);
    const [showMore, setShowMore] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.mealsId}`)
            .then(({data}) => {
                setCategory(data.meals);
            })
    }, []);

    return (

        <div className={'container'}>
            <div style={{display:"flex",alignItems:"center"}}>

                <button style={{backgroundColor: "#4CAF50", borderRadius: "40px", color: "white",padding:"13px 20px",border:"none"}}
                        onClick={ () => navigate(-1)}> Go Back </button>
            </div>
            <div className={'meal-page'}>
                {category.map((meal) => (
                    <div  className={'meal-box'}>
                        <div>

                            <div className={'row'}>

                                <div className={'col-6'}>
                                    <img style={{marginTop:"23px"}} src={meal.strMealThumb} alt="" width={400} height={350}/>
                                </div>
                                <div className={'col-6'}>
                                    <div className={'description'}>
                                        <h2> Name : </h2> <h4>{meal.strMeal}</h4>
                                    </div>

                                    <div className={'description'}>
                                        <h2> Whose : </h2> <h4>{meal.strArea}</h4>
                                    </div>
                                    <div className={'description'}>
                                        <h2> Category : </h2> <h4>{meal.strCategory}</h4>
                                    </div>
                                    <CustomModalvideo/>
                                </div>
                            </div>
                            <div className={'ingre'}>
                                <h2> Ingredients :  </h2>
                                <Link to={`/category/meals/ingrediend/${meal.strIngredient1}`} >
                                    <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient1}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient1}-Small.png`} width={60}/>
                                    </div>
                                </Link>
                                <Link to={`/category/meals/ingrediend/${meal.strIngredient2}`} >
                                    <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient2}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient2}-Small.png`} width={60}/>
                                    </div>
                                </Link>
                                <Link to={`/category/meals/ingrediend/${meal.strIngredient3}`} >
                                    <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient3}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient3}-Small.png`} width={60}/>
                                    </div>
                                </Link>
                                <Link to={`/category/meals/ingrediend/${meal.strIngredient4}`}>
                                    <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient4}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient4}-Small.png`} width={60}/>
                                    </div>
                                </Link>
                                {showMore ?<div style={{display:"flex"}}>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient5}`} >
                                            <div className={'ingrediends'}>
                                                <h5>{meal.strIngredient5}</h5>
                                                <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient5}-Small.png`} width={60}/>
                                            </div>
                                        </Link>
                                        <Link to={`/category/meals/ingrediend/${meal.strIngredient6}`} >
                                            <div className={'ingrediends'}>
                                                <h5>{meal.strIngredient6}</h5>
                                                <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient6}-Small.png`} width={60}/>
                                            </div>
                                        </Link>
                                        <Link to={`/category/meals/ingrediend/${meal.strIngredient7}`}>
                                        <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient7}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient7}-Small.png`} width={60}/>
                                        </div>
                                        </Link>
                                        <Link to={`/category/meals/ingrediend/${meal.strIngredient8}`} >
                                        <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient8}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient8}-Small.png`} width={60}/>
                                        </div>
                                        </Link>
                                        <Link to={`/category/meals/ingrediend/${meal.strIngredient9}`} >
                                        <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient9}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient9}-Small.png`} width={60}/>
                                        </div>
                                        </Link>
                                        <Link to={`/category/meals/ingrediend/${meal.strIngredient10}`} >
                                        <div className={'ingrediends'}>
                                        <h5>{meal.strIngredient10}</h5>
                                        <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient10}-Small.png`} width={60}/>
                                        </div>
                                        </Link>
                                </div>:null}
                                    <button onClick={() => setShowMore(!showMore)}
                                    style={{backgroundColor: "#4CAF50", borderRadius: "40px", color: "white",padding:"15px 20px",border:"none",marginTop:"12px"}}>
                                {showMore ? 'hide' : 'show more'}
                                    </button>

                            </div>
                            <div className={'instructions'}>
                                <h2> Instructions : </h2> <p>{meal.strInstructions}</p>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Meals;