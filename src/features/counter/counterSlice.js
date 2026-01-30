import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// async action (thunk) example
export const fetchCount = createAsyncThunk("counter/fetchCount", async () => {
  // Simulate an async call (e.g. API)
  const result = await Promise.resolve(10);
  return result;
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    addByAmount(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value += action.payload;
      })
      .addCase(fetchCount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message ?? "Unknown error";
      });
  },
});

export const { increment, addByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
