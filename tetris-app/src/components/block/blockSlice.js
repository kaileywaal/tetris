import { createSlice } from '@reduxjs/toolkit'

export const graphSlice = createSlice({
  name: 'graph',
  initialState: {
    value: [['x','x','x'],
            [' ','x',' ']]
  },
  reducers: {
    rotateRight: state => {
      let rows = state.value[0].length;
      let columns = state.value.length;
      console.log(rows);
    },
    rotateLeft: state => {
      state.value -= 1
    },
  }
})

export const { rotateRight, rotateLeft } = counterSlice.actions

export default graphSlice.reducer