import { Table } from 'antd'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getProducts } from '../../../redux/actions/product'

const onChange = (pagination, filters, sorter, extra) => {}

export default function ProductList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const products = useSelector((state) => state?.product.products)

  console.log(products)

  const data = products.map((item, index) => {
    console.log(item)
    return {
      key: index,
      id: item.id,
      product: item.name,
      brand: item.brand,
      stock: item.countInStock,
      price: item.price,
      rating: item.rating,
      description: item.description,
    }
  })

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
      render: (data) => (
        <>
          {' '}
          <Button
            icon={<EditOutlined />}
            onClick={() =>
              navigate('/admin/edit-product', {
                state: data,
                replace: true,
              })
            }
          />
          <Button icon={<DeleteOutlined />} />
        </>
      ),
    },
  ]

  console.log(data)
  return <Table columns={columns} dataSource={data} onChange={onChange} />
}
