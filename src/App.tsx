import { Provider } from 'react-redux'
import {store} from '@/store'
import Home from '@pages/Home'
import { MaterialLab } from './components/ui/MaterialLab'
import { Box } from '@mui/material'


function App() {
  return (
    <Provider store={store}>
      <Box sx={{ bgcolor: '#feca57' }}>
        <Home />
        {/* <MaterialLab /> */}
      </Box>
    </Provider>
  )
}

export default App
