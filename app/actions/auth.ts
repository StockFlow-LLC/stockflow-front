// app/actions/auth.ts
'use server'

import { cookies } from 'next/headers'

export async function login(formData: FormData) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACK}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
                rememberMe: formData.get('rememberMe') === 'true'
            }),
        })
        if (!response.ok) {
            const errorText = await response.text()
            console.error('Login failed:', response.status, errorText)
            throw new Error(`Login failed: ${response.status} ${errorText}`)
        }

        const data = await response.json()
        console.log('Login response:', data)

        if (!data.access_token) {
            throw new Error('No token received from server')
        }

        // Set HTTP-only cookie
        (await cookies()).set('token', data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: formData.get('rememberMe') === 'true' ? 30 * 24 * 60 * 60 : 24 * 60 * 60
        })

        return data
    } catch (error) {
        console.error('Login action error:', error)
        throw error
    }
}

export async function logout() {
    (await cookies()).delete('token')
}

export async function getSession() {
    const token = (await cookies()).get('token')
    // console.log("aq shemodis?",token)
    if (!token) {
        return null
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACK}/api/auth/verify`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    })
    console.log("this is the response", response)

    if (!response.ok) {
        return null
    }

    return token;
}