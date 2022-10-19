import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from "react-router-dom";
import { fetchProduct } from '../../api';
import { Box, Text, Button } from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';
import { useBasket } from '../../contexts/BasketContext';

function ProductDetail() {
    const { productId } = useParams();
    const { addToBasket, items } = useBasket();
    const { isLoading, isError, data } = useQuery(["product", productId], () => fetchProduct(productId));

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    const findBasketItem = items.find((item) => item.id === data.id)
    const images = data.productPhotos.map((url) => ({ original: url.url }))

    return (
        <div>
            <Button onClick={() => addToBasket(data, findBasketItem)} colorScheme={findBasketItem ? "red" : "blue"}>
                {
                    findBasketItem ? 'Sepetten Sil' : "Sepete Ekle"
                }
            </Button>
            <Text as={"h2"}>{data.brandName} - {data.productName}</Text>
            <Text>{data.categoryName}</Text>
            <Text>{data.productPrice} TL</Text>

            <Box margin={"10"}>
                <ImageGallery items={images} />
            </Box>

        </div>
    )
}

export default ProductDetail