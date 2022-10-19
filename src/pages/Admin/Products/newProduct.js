import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { addProduct } from '../../../api';
import { message } from 'antd';
import { Formik } from "formik";
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

import validationSchema from "./validation"

function NewProduct() {
    const queryClient=useQueryClient();

    const newProductMutation=useMutation(addProduct,{
        onSuccess:()=>queryClient.invalidateQueries("admin:products")
    });

    const handleSubmit = async (values, bag) => {
        console.log(values);
        message.loading({content:"Loading...",key:"product_add"});

        newProductMutation.mutate(values,{
            onSuccess:()=>{
                console.log("success");
            }
        })

        

        message.success({
            content:"Eklendi",
            key:"product_add",
            duration:3
        })
    };
    

    return (
        <div>
            <Text fontSize={"2xl"}>Ürün Ekle</Text>

            <Formik initialValues={{
                productName: "",
                productPrice: "",
                productStock: "",
                customUrl: "",
                brandId: "",
                categoryId: "",
            }}
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

                                        <FormControl mt={4}>
                                            <FormLabel>Foto Url</FormLabel>
                                            <Input name='customUrl' onChange={handleChange} onBlur={handleBlur} value={values.customUrl} />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>Marka Idsi</FormLabel>
                                            <Input name='brandId' onChange={handleChange} onBlur={handleBlur} value={values.brandId} />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>Kategori id</FormLabel>
                                            <Input name='categoryId' onChange={handleChange} onBlur={handleBlur} value={values.categoryId} />
                                        </FormControl>


                                        <Button mt={4} width="full" type='submit' colorScheme={"green"} variant="outline" >Ekle</Button>
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

export default NewProduct