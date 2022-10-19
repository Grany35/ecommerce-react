
import { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();


const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addToBasket = async (data, findBasketItem) => {
        if (!findBasketItem) {
            return setItems((items) => [data, ...items])
        }

        const filtered = items.filter((item) => item.id !== findBasketItem.id)

        setItems(filtered);
    }

   

    const removeFromBasket = (itemId) => {
        const filtered = items.filter((item) => item.id !== itemId);
        setItems(filtered);
    }

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket
    };

    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };