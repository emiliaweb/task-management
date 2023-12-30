import { FC, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { useCustomTheme } from '@/shared/model/hooks/use-custom-theme';

import AppRouter from '@/app/router/router';
import Sidebar from '@/components/sidebar';

const App: FC = () => {
  const theme = useCustomTheme();

  const sidebarState = localStorage.getItem('sidebarState');
  const [isOpen, setOpen] = useState<boolean>((sidebarState && JSON.parse(sidebarState)) || true);

  const toggleSidebar = () => {
    setOpen(state => !state)
  }

  useEffect(() => {
    localStorage.setItem('sidebarState', JSON.stringify(isOpen))
  }, [isOpen])

  return (
    <Box sx={{ display: 'flex', maxWidth: '100vw' }}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Box sx={{ padding: theme.spacing(6), width: '100%' }}>
        <AppRouter />
      </Box>
    </Box>
  )
}

export default App
