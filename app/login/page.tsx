import React from 'react'

export default function Login() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className='flex flex-col border border-gray-600 items-center h-96 py-5 '>
        <header>Login Page</header>
        <section className='flex flex-col justify-center h-full px-10'>
          <div>
            <label htmlFor="UserName">UserName:</label>
            <input/>
          </div>
          <div>
            <label htmlFor="Name">Password:</label>
            <input/>
          </div>
        </section>
      </section>
    </main>
  )
}
