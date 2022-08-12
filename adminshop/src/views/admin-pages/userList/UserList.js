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
    title: 'User',
    dataIndex: 'user',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.user.localeCompare(b.user),
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.contact - b.contact,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
  {
    title: 'Verify Email',
    dataIndex: 'verifyEmail',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.verifyEmail.localeCompare(b.verifyEmail),
  },
  {
    title: 'Verify Contact',
    dataIndex: 'verifyContact',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.verifyContact.localeCompare(b.verifyContact),
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
    user: 'Lebron',
    contact: '12349',
    status: 'Admin',
    verifyEmail: 'No',
    verifyContact: 'Yes',
  },
  {
    key: '2',
    id: '2',
    user: 'Curry',
    contact: '165652349',
    status: 'Admin',
    verifyEmail: 'Yes',
    verifyContact: 'No',
  },
  {
    key: '3',
    id: '3',
    user: 'Kyrie',
    contact: '66712349',
    status: 'Customer',
    verifyEmail: 'Yes',
    verifyContact: 'Yes',
  },
  {
    key: '4',
    id: '4',
    user: 'Klay',
    contact: '172349',
    status: 'Admin',
    verifyEmail: 'No',
    verifyContact: 'No',
  },
  {
    key: '5',
    id: '5',
    user: 'Luca',
    contact: '412349',
    status: 'Admin',
    verifyEmail: 'Yes',
    verifyContact: 'Yes',
  },
]

const onChange = (pagination, filters, sorter, extra) => {}

const UserList = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
)

export default UserList
