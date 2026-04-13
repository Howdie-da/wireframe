import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allPosts: [],
    status: false
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.allPosts = action.payload
            state.status = true
        },
        addOne: (state, action) => {
            state.allPosts.unshift(action.payload)
        },
        updateOne: (state, action) => {
            state.allPosts = state.allPosts.map((post) => post.$id === action.payload.$id ? action.payload : post)
        },
        deleteOne: (state, action) => {
            state.allPosts = state.allPosts.filter((post) => post.$id !== action.payload)
        }
    }
})

export const {setPosts, addOne, updateOne, deleteOne} = postSlice.actions

export default postSlice.reducer