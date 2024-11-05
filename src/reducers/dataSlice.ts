import { Data } from '@/interface'
import { DataService } from '@/services'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Data = {
    profile: {
        bio: '',
        image: '',
        name: '',
        senior: ''
    }
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchData: state => {
            return state = DataService()
            console.log('here',state)
        }
    }
})

export const {fetchData} = dataSlice.actions

export default dataSlice.reducer
