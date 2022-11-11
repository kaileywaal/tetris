import { configureStore } from '@reduxjs/toolkit'
import graphReducer from './components/graph/graphReducer'
import blockReducer from './components/block/blockReducer'

export default configureStore({
  reducer: {
    graph: graphReducer,
    block: blockReducer
  }
})