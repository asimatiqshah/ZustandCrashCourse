import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV({
    id: 'my-app-storage',
    encryptionKey: "some_secret_key"
});

//// Adding global functions to set and get items
export const mmkvStorage={
    setItem:(key,value)=>{
        storage.set(key,value);
    },
    getItem:(key)=>{
        const value = storage.getString(key);
        return value || null; 
    },
    removeItem:(key)=>{
        storage.delete(key);
    }
}


//getter
export const saveCredentials=(email,password)=>{
    storage.set('email',email);
    storage.set('password',password);
}
//setter
export const loadCredentials=()=>{
    const email = storage.getString('email') || null;
    const password = storage.getString('password') || null;
    return {email,password};
}