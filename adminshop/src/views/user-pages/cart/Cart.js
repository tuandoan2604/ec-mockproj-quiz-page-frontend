import React from 'react'
import { Table, Button, Card } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    render: () => (
      <img
        style={{ width: 120, height: 120, objectFit: 'cover' }}
        src="https://sneakerbardetroit.com/wp-content/uploads/2017/03/nike-kyrie-3-cool-grey-anthracite-polar-blue.jpg"
        alt="img"
      />
    ),
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    render: () => (
      <>
        <Button icon={<PlusOutlined />} />
        <Button icon={<MinusOutlined />} />
      </>
    ),
  },

  {
    title: 'Total',
    dataIndex: 'total',
  },
]
const data = [
  {
    product: 'Kyrie 3',
    brand: 'Nike',
    stock: '9',
    price: '$130',
  },
]

const onChange = (pagination, filters, sorter, extra) => {}

export default function Cart() {
  return (
    <>
      <h1>Shopping Cart</h1>

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={false}
      />
      <Card
        style={{
          width: 600,
          marginLeft: 'auto',
          marginTop: 43,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1>Cart Total</h1>
        <h3>Subtotal</h3>
        <h3>Shipping</h3>
        <h2>Total</h2>
        <Button
          style={{
            width: 500,
            height: 60,
            color: 'white',
            backgroundColor: '#001529',
            fontSize: '30px',
          }}
        >
          Proceed to checkout
        </Button>
      </Card>
    </>
  )
}
