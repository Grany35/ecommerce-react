import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct, updateProduct } from '../../../api';
import { message } from 'antd';
import { Formik } from "formik";
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

import validationSchema from "./validation"

function AdminProductDetail() {
    const { productId } = useParams();

    const { isLoading, isError, data, error } = useQuery(["admin:product", productId], () => fetchProduct(productId));

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div> error {error.message}</div>
    }


    const handleSubmit = async (values, bag) => {
        console.log(values);
        message.loading({content:"Loading..",key:"product_update"});

        try {
            await updateProduct(values);

            message.success({content:"Güncellendi",key:"product_update",duration:3,});
        } catch (e) {
            message.error("güncellenemedi");
            
        }
    };

    return (
        <div>
            <Text fontSize={"2xl"}>Edit</Text>

            <Formik initialValues={{
                productName: data.productName,
                productPrice: data.productPrice,
                productStock: data.productStock,
                id: productId,
            }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ handleSubmit, error, touched, handleChange, handleBlur, values, isSubmitting }) => (
                        <>
                            <Box>
                                <Box my={5} textAlign="left">
                                    <form onSubmit={handleSubmit}>

                                        <FormControl>
                                            <FormLabel>Ürün Adı / Açıklaması</FormLabel>
                                            <Input name='productName' onChange={handleChange} onBlur={handleBlur} value={values.productName} />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>Fiyat</FormLabel>
                                            <Input name='productPrice' onChange={handleChange} onBlur={handleBlur} value={values.productPrice} />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>Stok Miktarı</FormLabel>
                                            <Input name='productStock' onChange={handleChange} onBlur={handleBlur} value={values.productStock} />
                                        </FormControl>
                                        <Button mt={4} width="full" type='submit' colorScheme={"green"} variant="outline" >Güncelle</Button>
                                    </form>
                                </Box>
                            </Box>
                        </>
                    )
                }
            </Formik>

        </div>
    )
}

export default AdminProductDetail