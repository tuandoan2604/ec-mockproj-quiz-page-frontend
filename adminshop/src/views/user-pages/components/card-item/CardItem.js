import { Card, Button, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../../../redux/actions/cart'
const { Meta } = Card

export default function CardItem(props) {
  const dispatch = useDispatch()

  const { name, countInStock, price, id } = props.product

  const handleAddToCart = () => {
    if (props.isLogin) {
      dispatch(
        addToCart({ product: name, productId: id, price: price, quantity: 1 })
      )
    } else {
      message.error('Please login first!')
    }
  }
  return (
    <Card
      hoverable
      style={{
        width: 318,
      }}
      cover={
        <img
          alt="example"
          src="https://sneakerbardetroit.com/wp-content/uploads/2017/03/nike-kyrie-3-cool-grey-anthracite-polar-blue.jpg"
        />
      }
    >
      <Meta title={name} description={`${countInStock} available`}></Meta>
      <h3>{`$ ${price}`}</h3>
      <Button icon={<ShoppingCartOutlined />} onClick={handleAddToCart} />
    </Card>
  )
}
