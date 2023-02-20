import React from 'react';

import { Button, Form, Input } from 'antd';
export const SignupPage = () =>{
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
       <div className="app-container">
        <div className="main-signup">
          <div className="top-signup">
          <h1>Sign Up</h1>
          <span>Have an account? <a href="/login/Loginpage" className='signin-text'>Sign in</a></span>
          </div>
         <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email address" 
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
           </Form.Item>
          
        
            <Form.Item
            label="Confirm Password"
            name="password"
            rules={[{ required: true, message: 'Password not match!' }]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="item-button" >
            <Button type="primary" htmlType="submit" className='submit-button'>
              Submit
            </Button>
          </Form.Item>
          
        </Form>
        </div>
       </div>)
}
export default SignupPage;