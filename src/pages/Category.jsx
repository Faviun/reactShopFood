import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <div className="container content">
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </div>
    );
};

export default Category;
