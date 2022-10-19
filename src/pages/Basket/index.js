import { Alert, Box, Button, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext';

function Basket() {
    const { items,removeFromBasket } = useBasket();

    const total = items.reduce((acc, obj) => acc + obj.productPrice, 0)

    return (
        <Box p={5}>
            {
                items.length < 1 && <Alert status='warning'>Sepette hiç ürününüz yok</Alert>
            }
            {
                items.length > 0 && (
                    <>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id} style={{marginBottom: 15}}>
                                    <Link to={`/product/${item.id}`}>
                                        {item.productName} - {item.productPrice}
                                        <Image htmlWidth={200} src={item.mainPhotoUrl} />
                                    </Link>
                                    <Button mt={2} size="sm" colorScheme={"red"} onClick={()=>removeFromBasket(item.id)}>
                                        Sepetten Sil
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <Box mt={10}>
                            Toplam: {total}
                        </Box>
                    </>
                )
            }
        </Box>
    )
}

export default Basket