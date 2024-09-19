import { createSlice } from '@reduxjs/toolkit'


export const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        selectedCategory: "Woman clothes"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory  = state => state.clothes.selectedCategory;
export const { filterCategory } = clothesSlice.actions;
export default clothesSlice.reducer;