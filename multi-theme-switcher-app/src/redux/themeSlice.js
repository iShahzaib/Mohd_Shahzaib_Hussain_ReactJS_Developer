import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem('app-theme') || 'theme1';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeName: savedTheme,
    },
    reducers: {
        setThemeName: (state, action) => {
            state.themeName = action.payload;
            localStorage.setItem('app-theme', action.payload); // persist theme
        },
    },
});

export const { setThemeName } = themeSlice.actions;
export default themeSlice.reducer;
