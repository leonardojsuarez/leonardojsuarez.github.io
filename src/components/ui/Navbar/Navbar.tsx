import { BottomNavigation, BottomNavigationAction, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Home, DarkMode, LightMode } from '@mui/icons-material'
import { FC, useContext } from 'react'
import { ConfigContext } from '@/context/ConfigContext'
import { LIGHT } from '@/types'

export const Navbar:FC = () => {
  const {config, toggleTheme} = useContext(ConfigContext)

  return (
    <>
      <Box>
        <nav>
          <List>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Un item</ListItemText>
              </ListItemButton>
              <ListItemIcon><Home /></ListItemIcon>
              
              
            </ListItem>
          </List>
        </nav>
      </Box>


      {config.language}
      {config.theme}

      <Switch onClick={() => toggleTheme()} 
        checked={ LIGHT === config.theme } 
        icon={ LIGHT === config.theme ? <LightMode /> : <DarkMode />} color="secondary"></Switch>
      
      {/* <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<Home />} />
      </BottomNavigation> */}
    </>
  )
}
