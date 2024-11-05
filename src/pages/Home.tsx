import MainLayout from '@/components/Layouts/MainLayout'
import { Welcome } from '@/components/profile/Welcome/Welcome'
import { WorkInformation } from '@/components/profile/WorkInformation/WorkInformation'
import { FC, useEffect } from 'react'
import { ThemeProvider } from '@/context/ThemeProvider'
import { useDispatch } from 'react-redux'
import { fetchData } from '@/reducers/dataSlice'

const Home:FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <ThemeProvider>
      <MainLayout>
          <Welcome />
          {/* <WorkInformation /> */}
        </MainLayout>
    </ThemeProvider> 
  )
}

export default Home
