import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCX-SHKNl1dI-qbHbGyfIZcuL8MB9H5Yko\n',
    authDomain: 'stocflow-llc.firebaseapp.com',
    projectId: 'stocflow-llc',
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const auth = getAuth();
