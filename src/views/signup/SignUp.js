import React from 'react'
import ButtonFacebook from '../components/ButtonFacebook/ButtonFacebook'
import ButtonGoogle from '../components/ButtonGoogle/ButtonGoogle'
import { Button, Checkbox, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { signup } from '../../stores/actions/auth'

import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SignUp() {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  // validation
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    onSubmit: (values) => {
      navigate('/signin', { replace: true })
      dispatch(signup(values, navigate))
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required')
        .min(4, 'Last name is more than 4 characters'),
      email: Yup.string()
        .required('Required')
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Invalid Email'
        ),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password is more than 8 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        ),
    }),
  })
  return (
    <>
      <div>
        <div
          style={{
            marginTop: '10px',
            fontSize: '28px',
            fontWeight: '400',
            color: 'white',
          }}
        >
          Create your account
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ButtonFacebook style={{ marginTop: '36px' }} />
          <ButtonGoogle style={{ marginTop: '29px' }} />
        </div>
        <div style={{ color: 'white', marginTop: '28px' }}>
          OR LOG IN WITH EMAIL
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Input
              id="username"
              name="username"
              value={formik?.value?.username}
              onChange={formik.handleChange}
              placeholder="Username"
              style={{
                width: '353px',
                height: '50.6px',
                borderRadius: '38px',
                paddingLeft: '23px',
                marginTop: '65px',
              }}
            />
            <p>{formik.errors.username}</p>
          </div>
          <div>
            <Input.Password
              id="password"
              name="password"
              value={formik?.value?.password}
              onChange={formik.handleChange}
              placeholder="Password"
              style={{
                width: '353px',
                height: '50.6px',
                borderRadius: '38px',
                paddingLeft: '23px',
                marginTop: '28.4px',
              }}
            />
            <p>{formik.errors.password}</p>
          </div>
          <div>
            <Input
              id="email"
              name="email"
              value={formik?.value?.email}
              onChange={formik.handleChange}
              placeholder="Email"
              style={{
                width: '353px',
                height: '50.6px',
                borderRadius: '38px',
                paddingLeft: '23px',
                marginTop: '28.4px',
              }}
            />
            <p>{formik.errors.email}</p>
          </div>

          <div
            style={{
              marginTop: '29.4px',
            }}
          >
            <Checkbox>
              I have read the&nbsp;
              <p style={{ color: '#0028FD' }}>Private Policy</p>
            </Checkbox>
          </div>
          <Button
            style={{
              width: '353px',
              height: '50.6px',
              borderRadius: '38px',
              marginTop: '19.1px',
            }}
            htmlType="submit"
          >
            REGISTER
          </Button>
        </form>
        <div
          style={{
            marginTop: '40px',
            fontSize: '14px',
            fontWeight: '400',
            color: 'white',
          }}
        >
          ALREADY HAVE AN ACCOUNT?&nbsp;
          <a href="/signin" style={{ color: 'black' }}>
            SIGN IN
          </a>
        </div>
      </div>
    </>
  )
}
