import React from 'react'
import { Card } from 'antd'
import { Input, Upload, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select

export default function AddProduct() {
  return (
    <div>
      <h1>CREATE PRODUCT</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Card
          title="Basic information"
          style={{
            width: '720px',
            marginRight: '25px',
          }}
        >
          <h3>Name</h3>
          <Input />

          <h3>Description</h3>
          <Input />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3>Price</h3>
              <Input style={{ width: '300px' }} />
            </div>
            <div>
              <h3>Discount percentage</h3>
              <Input style={{ width: '300px' }} />
            </div>
          </div>

          <h3>Brand</h3>
          <Input />

          <h3>Stock quantity</h3>
          <Input />
        </Card>
        <div>
          <Card
            title="Images"
            style={{
              width: '520px',
            }}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Card>
          <Card
            title="Categories"
            style={{
              width: '520px',
            }}
          >
            <Input />
          </Card>
          <Card
            title="Rating"
            style={{
              width: '520px',
            }}
          >
            <Select
              defaultValue="1"
              style={{
                width: 120,
              }}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
          </Card>
        </div>
      </div>
    </div>
  )
}
