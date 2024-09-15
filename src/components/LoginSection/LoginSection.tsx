import React from 'react'
import './LoginSection.scss'

interface LoginSectionProps {
  loginLink: string
  signUpLink: string
}

const LoginSection = ({ loginLink, signUpLink }: LoginSectionProps) => {
  return (
    <div className='signBox'>
      <div className='signLine'>মন্তব্য করতে লগ ইন করুন অথবা সাইন আপ করুন</div>
      <div className="gap-y-6">
        <a href={loginLink}>
          <button className='loginBtn' name='login'>
            লগ ইন
          </button>
        </a>
        <a href={signUpLink}>
          <button className='signBtn' name='signup'>
            সাইন আপ
          </button>
        </a>
      </div>
    </div>
  )
}

export default LoginSection
