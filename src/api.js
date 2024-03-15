import { API_URL } from "./config";

export const getMealById = async (meaId) => {
    const response = await fetch(API_URL + "lookup.php? i=" + meaId);
    return await response.json();
};

export const getAllCategories = async () => {
    const response = await fetch(API_URL + "categories.php");
    return await response.json();
};

export const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + "filter.php?c=" + catName);
    return await response.json();
};
