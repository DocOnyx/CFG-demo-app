import React from 'react';

export function userReducer(state, action){
    switch(action.type){
        case 'ADD_USER':
            console.log('checking details ...')
            const userList1 = state.users
            const userExists = userList1.some(item => {
                if (item.username === action.payload.username){
                    return true}
                else {
                    return false
                }})
            if (userExists){
                console.log('Username already exists')
                alert('Error! Username already exists')
                return state
            }
            else {
            alert('Success! Log in with your details to continue')
            console.log('New user added')
            
            return {...state, users: [...state.users, action.payload]}}
        case 'DEL_USER':
            const newUsersArray = state.users.filter(user => user !== action.payload)
            console.log('user deleted')
            return {...state, users: newUsersArray}
        case 'LOG_IN':
            console.log('checking user details ...')
            const userList = state.users
            console.log(action.payload)
            console.log(userList)
            const isFound = userList.some(item => {
                if (item.username === action.payload.username && item.password === action.payload.password){
                    return true}
                else {
                    return false
                }})

            if (isFound){
                console.log('User logged in')
                return {...state, logged_in_user: action.payload.username}
            }
            else {
            alert('Error! Incorrect username or password')
            console.log('Incorrect username or password')
            return state}
            
        case 'LOG_OUT':
            console.log('User logged out')
            return {...state, logged_in_user: ''}
        default:
            console.log('no changes made')
            return state

    }
};

