import { Table } from 'antd'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import React from 'react'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.product.localeCompare(b.product),
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.brand.localeCompare(b.brand),
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.stock - b.stock,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.rating - b.rating,
  },
  {
    title: '',
    dataIndex: '',
    key: 'addToCart',
    render: () => (
      <>
        {' '}
        <Button icon={<EditOutlined />} />
        <Button icon={<DeleteOutlined />} />
      </>
    ),
  },
]
const data = [
  {
    key: '1',
    id: '1',
    product: 'Kobe 4',
    brand: 'Nike',
    stock: '9',
    price: 275,
    rating: 5,
  },
  {
    key: '2',
    id: '2',
    product: 'Kobe 11 EM',
    brand: 'Nike',
    stock: '6',
    price: 210,
    rating: 4,
  },
  {
    key: '3',
    id: '3',
    product: 'KT 4',
    brand: 'Anta',
    stock: '11',
    price: 130,
    rating: 4.5,
  },
  {
    key: '4',
    id: '4',
    product: 'Lebron 11',
    brand: 'Nike',
    stock: '2',
    price: 380,
    rating: 3,
  },
  {
    key: '5',
    id: '5',
    product: 'Kyrie 3',
    brand: 'Nike',
    stock: '1',
    price: 230,
    rating: 5,
  },
]

const onChange = (pagination, filters, sorter, extra) => {}

const ProductList = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
)

export default ProductList
