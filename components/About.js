import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className=" fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex space-x-8">
      <div>
        <Link href='https://www.instagram.com/thekerdos?igsh=cG9tZWkxcXEyaGhi'>
        Instagram
        </Link>
      </div>
      <div>
        Contact
      </div>
    </div>
  )
}

export default About
