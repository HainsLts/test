import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '@/src/utils/AxiosBase';

interface ApiState {
  data: any[]; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ApiState = {
  data: [],
  status: 'idle',
  error: null,
};

interface FetchDataArgs {
  endpoint: string;
}

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({ endpoint }: FetchDataArgs, thunkAPI :any) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Unknown error');
    }
  }
);

const apiSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder :any) => {
    builder
      .addCase(fetchData.pending, (state : any) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state :any, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state : any, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch data';
      });
  },
});

export default apiSlice.reducer;
