import React from 'react';
import {Routes , Route , BrowserRouter} from "react-router-dom";
import Main from "./components/Main";
import Categories from "./components/Categories";
import Meals from "./components/Meals";
import Ingrediends from "./components/Ingrediends";
import Header from "./components/Header";
import Footer from "./components/Footer"

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/category/:categoryName' element={<Categories/>} />
                <Route path='/category/meals/:mealsId' element={<Meals/>} />
                <Route path='/category/meals/ingrediend/:ingreName' element={<Ingrediends/>} />

            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;