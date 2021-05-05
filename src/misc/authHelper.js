//import { AsyncStorage } from 'react-native'
//import { login, googleLogin, facebookLogin } from './../_services'
import { userConstants } from './../_core-modules/_constants'

export const login = async () => { }

export const loginGoogle = async () => { }

export const loginFacebook = async () => { }

export const loginOs = async () => { }

export const logout = async () => { }

export const register = async () => { }

export const forgotPassword = async () => { }

const getUserStorageAsync = async (setValues) => {
    // return AsyncStorage.getItem(userConstants.USER_TOKEN)
    //     .then(token => { if (token) setValues(token) })
    //     .catch(error => reject(error))
}

const setUserStorageAsync = async token => {
    // try {
    //     await AsyncStorage.setItem(userConstants.USER_TOKEN, token ? token : '')
    // } catch (e) {
    //     console.warn(e)
    // }
}

const removeUserStorageAsync = async () => {
    // try {
    //     await AsyncStorage.removeItem(userConstants.USER_TOKEN)
    // } catch (e) {
    //     console.warn(e)
    // }
}