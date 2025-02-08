import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase-client';

export const signInWithGoogle = async (): Promise<string> => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        // Retrieve the ID token from the signed-in user
        const token = await result.user.getIdToken();
        return token;
    } catch (error) {
        console.error('Error during Google sign-in', error);
        throw error;
    }
};
