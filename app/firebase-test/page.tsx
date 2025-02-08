"use client"
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { signInWithGoogle } from '@/lib/auth';

const LoginPage = () => {
    // Explicitly type the state as "User | null"
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            const token = await signInWithGoogle();
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACK}/api/protected`, {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(await response.json());
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <h1>Login with Google</h1>
            {user ? (
                <div>
                    <p>Signed in as: {user.email}</p>
                    {/* Optionally add a logout button here */}
                </div>
            ) : (
                <button onClick={handleLogin}>Sign In with Google</button>
            )}
        </div>
    );
};

export default LoginPage;
