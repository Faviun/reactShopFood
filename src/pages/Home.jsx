import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import CategoryList from "../components/CategoryList";

const Home = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
        });
    }, []);
    return (
        <main className="container content">
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </main>
    );
};

export default Home;
