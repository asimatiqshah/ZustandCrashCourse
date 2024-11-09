import { create } from 'zustand';
import { loadCredentials, mmkvStorage, saveCredentials } from './storage';
// import { loadCredentials, saveCredentials } from './storage';

const useAuthStore = create((set) => ({
    email: null,
    password: null,
    fetchLoadCredentials:()=>{
        //  const {email,password}= loadCredentials();
        //  set({email,password})
        const authEmail = mmkvStorage.getItem('email');
        const authPassword = mmkvStorage.getItem('password');
         set({email:authEmail,password:authPassword});

    },
    authSaveCredentials:(email,password)=>{
        // saveCredentials(email,password);
        // set({ email, password });

        mmkvStorage.setItem('email',email);
        mmkvStorage.setItem('password',password);
        set({ email, password });
    },
    authRemoveCredentials:()=>{
        mmkvStorage.removeItem('email');
        mmkvStorage.removeItem('password');
        set({email:null,password:null});
    }
}));

export default useAuthStore;
