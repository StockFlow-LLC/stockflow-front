'use client'

import { useState } from 'react'
import {signInWithGoogle} from "@/lib/auth";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACK}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (response.ok) {
        router.push('/articles')
        router.refresh()
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  }

  const handleGoogleSignup = async () => {
    try {
      const token = await signInWithGoogle();
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACK}/api/protected`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include',
      });

      if (response.ok) {
        router.push('/articles')
        router.refresh()
      }
    } catch (error) {
      console.error('Google signup error:', error);
    }
  }

  return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-zinc-900 p-8 rounded-lg">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">Let's get started</h1>
            <p className="text-zinc-400">Creating a free account unlocks many benefits</p>
          </div>

          <button
              onClick={handleGoogleSignup}
              className="w-full bg-white text-black font-medium py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md bg-zinc-800 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                    id="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md bg-zinc-800 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </label>
                <input
                    id="password"
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md bg-zinc-800 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
                {/*<input*/}
                {/*    type="checkbox"*/}
                {/*    id="terms"*/}
                {/*    className="rounded bg-zinc-800 border-zinc-700 text-zinc-600 focus:ring-zinc-600"*/}
                {/*    checked={formData.agreeToTerms}*/}
                {/*    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}*/}
                {/*/>*/}
              <label htmlFor="terms" className="text-sm text-zinc-400">
                I agree to the Terms & Condition
              </label>
            </div>

            <button
                type="submit"
                className="w-full bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Signup
            </button>
          </form>

          <div className="text-right">
            <Link href="/signin" className="text-sm text-zinc-400 hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </div>
  )
}