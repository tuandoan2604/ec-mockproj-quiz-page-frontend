import { Card, Button, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
const { Meta } = Card

export default function CardItem(props) {
  const { name, countInStock, price } = props.product

  const handleAddToCart = () => {
    if (props.isLogin) {
      console.log('add to cart')
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
