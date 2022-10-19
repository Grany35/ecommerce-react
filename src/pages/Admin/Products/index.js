import { useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchProductListAdmin } from '../../../api';
import { Table, Popconfirm } from 'antd';
import { Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function AdminProducts() {

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(["admin:products"], fetchProductListAdmin);

  console.log(data);
  //ekleme silme güncelleme buraya göz gezdir
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products")
  })

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "productName",
        key: "productName",
      }, {
        title: "Price",
        dataIndex: "productPrice",
        key: "productPrice",
      }, {
        title: "Brand",
        dataIndex: "brandName",
        key: "brandName",
      }, {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record.id}`}>Edit</Link>
            <Popconfirm
              title="Emin misin?"
              onConfirm={() => {
                deleteMutation.mutate(record.id,
                  {
                    onSuccess: () => {
                      console.log("success")
                    }
                  })
              }}
              okText="Yes"
              cancelText="No"
              placement='left' >
              <a href="/#" style={{ marginLeft: 10 }}>Sil</a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error {error.message}</div>
  }

  return (
    <div>
      <Flex justifyContent={"space-between"} alignItems="center">
        <Text fontSize={"2xl"} p="5">
          Products
        </Text>
        <Link to={"/admin/products/new"}>
          <Button colorScheme={"blue"}>New</Button>
        </Link>

      </Flex>

      <Table  dataSource={data} columns={columns} rowKey="id" />

    </div>
  )
}

export default AdminProducts