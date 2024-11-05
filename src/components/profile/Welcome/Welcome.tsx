import { cyan, grey } from '@mui/material/colors'
import { Avatar, Box, Container, Grid2, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const Welcome = () => {
  const {profile} = useSelector((state) => state.data)

  return (
    <>
      <Grid2 size={12} sx={{
        display: 'flex', 
        textAlign: 'center',
        bgcolor: '#485460', 
        color: "#fff", 
        m: 0, p: '30px 5px',
        height: '250px'
      }}>
        <Container>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bolder'}}>{profile.name}</Typography>
          <Typography variant="h4" component="span">{profile.senior}</Typography>
        </Container>
      </Grid2>
      <Grid2 size={12} sx={{
        display: 'flex', 
        textAlign: 'center',
        bgcolor: '#ecf0f1', 
        m: 0, p: '30px 5px'
      }}>
        <Container>
          <Box sx={{ display:'flex', justifyContent:'center', mt:3, p:1}}>
            <Avatar src={profile.image} alt={profile.name} sx={{ width: 150, height: 150, border: 4, borderColor: '#ecf0f1', mt:'-130px' }}></Avatar>
          </Box>
          
          <Grid2 size={8} offset={2}>
            <Typography variant="h3">Acerca de mí</Typography>
            <div dangerouslySetInnerHTML={{ __html: profile.bio}}></div>
          </Grid2>
          
          
        </Container>
      </Grid2>
    </>
  )
}
