import './Admin.css'
import React, { useEffect, useState } from 'react'
import {
  MedicineBoxOutlined,
  ShoppingCartOutlined,
  WindowsOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'

import { Button } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { decryptData } from '../../util/util'

import ProductList from './productList/ProductList'
import AddProduct from './addProduct/AddProduct'
import UserList from './userList/UserList'
import AddUser from './addUser/AddUser'
import Orders from './orders/Orders'
import Dashboard from './dashboard/Dashboard'
import AuthPage from './authPage/AuthPage'

const { Header, Content, Footer, Sider } = Layout

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  // menu data
  const getItem = (label, key, icon, children, onClick) => {
    return {
      key,
      icon,
      children,
      label,
      onClick,
    }
  }
  const items = [
    getItem('Dashboard', '1', <WindowsOutlined />, null, () =>
      navigate('/admin/dashboard', { replace: true })
    ),
    getItem('Product', '2', <MedicineBoxOutlined />, [
      getItem('Product List', '3', null, null, () =>
        navigate('/admin/product-list', { replace: true })
      ),
      getItem('Add Product', '4', null, null, () =>
        navigate('/admin/add-product', { replace: true })
      ),
    ]),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('User List', '5', null, null, () =>
        navigate('/admin/user-list', { replace: true })
      ),
      getItem('Add User', '6', null, null, () =>
        navigate('/admin/add-user', { replace: true })
      ),
    ]),
    getItem('Orders', '7', <ShoppingCartOutlined />, null, () =>
      navigate('/admin/orders', { replace: true })
    ),
  ]
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <a className="admin-logo" href="/admin">
          SHOP APP
        </a>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div className="header-btn">
            <Button className="sign">Sign In</Button>
            <Button className="sign">Sign Up</Button>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product-list" element={<ProductList />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="user-list" element={<UserList />} />
              <Route path="add-user" element={<AddUser />} />
              <Route path="orders" element={<Orders />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        ></Footer>
      </Layout>
    </Layout>
  )
}
