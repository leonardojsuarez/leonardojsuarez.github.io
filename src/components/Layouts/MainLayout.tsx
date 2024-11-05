import {Navbar} from '@/components/ui/Navbar';
import { FC, ReactNode } from 'react';
import { Grid2 } from '@mui/material';

const MainLayout: FC<{children:ReactNode}> = ({ children }) => {
  return (
    <>
      <header>
        {/* <Navbar></Navbar> */}
      </header>
      
      <main>
        <Grid2 container spacing={0}>
          {children ?? <p>Page under construction</p> }
        </Grid2>
      </main>
      
      <footer>
        
      </footer>
    </>
  )
}

export default MainLayout
