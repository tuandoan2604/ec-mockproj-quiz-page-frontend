import React from 'react'
import ButtonFacebook from '../components/ButtonFacebook/ButtonFacebook'
import ButtonGoogle from '../components/ButtonGoogle/ButtonGoogle'
import { Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signin } from '../../stores/actions/auth'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SignIn() {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(signin(values, navigate))
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required')
        .min(4, 'Last name is more than 4 characters'),
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
            marginTop: '20px',
            fontSize: '28px',
            fontWeight: '400',
            color: 'white',
          }}
        >
          Welcome Back!
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

          <Button
            style={{
              width: '353px',
              height: '50.6px',
              borderRadius: '38px',
              marginTop: '28.4px',
            }}
            htmlType="submit"
          >
            LOG IN
          </Button>
        </form>
        <div
          style={{
            color: 'white',
            fontSize: '14px',
            fontWeight: '400',
            marginTop: '25.4px',
          }}
        >
          Forgot Password?
        </div>

        <div
          style={{
            marginTop: '50px',
            fontSize: '14px',
            fontWeight: '400',
            color: 'white',
          }}
        >
          DON'T HAVE ACCOUNT?&nbsp;
          <a href="/signup" style={{ color: 'black' }}>
            SIGN UP
          </a>
        </div>
      </div>
    </>
  )
}
