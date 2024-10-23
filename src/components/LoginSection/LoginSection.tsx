import React from 'react'
import './LoginSection.scss'

interface LoginSectionProps {
  loginLink: string
  signUpLink: string
}

const LoginSection = ({ loginLink, signUpLink }: LoginSectionProps) => {
  return (
    <div className='signBox px-4'>
      <div className='signLine'>মন্তব্য করতে লগ ইন করুন অথবা সাইন আপ করুন</div>
      <div className="gap-y-6 flex flex-col md:flex-row">
        <a href={loginLink}>
          <button className='loginBtn px-6' name='login'>
            লগ ইন
          </button>
        </a>
        <a href={signUpLink}>
          <button className='signBtn text-nowrap' name='signup'>
            সাইন আপ
          </button>
        </a>
      </div>
    </div>
  )
}

export default LoginSection
