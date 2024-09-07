import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex space-x-8">
      <div>
        <Link href='/'>
        Instagram
        </Link>
      </div>
      <div>
        <Link href='/'>
        LinkedIn
        </Link>
      </div>
    </div>
  )
}

export default About
