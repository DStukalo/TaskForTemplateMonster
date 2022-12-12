import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPhotos = createAsyncThunk(
	'photos/fetchPhotos',
	async function ({ page, limit }, { rejectWithValue }) {
		try {
			const response = await fetch(
				`https://picsum.photos/v2/list?page=${page}&limit=${limit}`
			);
			if (!response.ok) {
				throw new Error('Server Error!');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const updatePhotos = createAsyncThunk(
	'photos/updatePhotos',
	async function ({ page, limit }, { rejectWithValue }) {
		try {
			const response = await fetch(
				`https://picsum.photos/v2/list?page=${page}&limit=${limit}`
			);
			if (!response.ok) {
				throw new Error('Server Error!');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const photoSlice = createSlice({
	name: 'photos',
	initialState: {
		photos: [],
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchPhotos.pending]: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		[fetchPhotos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.photos = action.payload;
		},
		[fetchPhotos.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[updatePhotos.pending]: (state) => {
			state.isLoading = true;
			state.error = null;
			state.photos = [];
		},
		[updatePhotos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.photos = action.payload;
		},
		[updatePhotos.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default photoSlice.reducer;
