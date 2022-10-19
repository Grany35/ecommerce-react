import React from 'react'
import { Button,Box,Image } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { useBasket } from '../../contexts/BasketContext';

function Card({item}) {
  const {addToBasket,items}=useBasket();

  const findBasketItem=items.find((basketItem)=>basketItem.id===item.id);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow={"hidden"} p="3">
        <Link to={`/product/${item.id}`}>
            <Image src={item.mainPhotoUrl} alt="product" loading='lazy' />

            <Box p="6">
                <Box d="plex" alignItems={"baseline"}>
                    {item.categoryName}
                </Box>
                <Box mt="1" fontWeight={"semibold"} as="h4" lineHeight={"tight"}>
                  {item.brandName} - {item.productName}
                </Box>
                <Box>
                    {item.productPrice} TL
                </Box>
            </Box>
        </Link>

        <Button colorScheme={findBasketItem ? "red" : "blue"} variant="solid" onClick={()=>addToBasket(item,findBasketItem)}>
            {
              findBasketItem ? 'Sepetten Sil' : "Sepete Ekle"
            }
        </Button>
    </Box>
  )
}

export default Card