import { Box, IconButton, Typography } from "@mui/material"
import { FC } from "react"
import { useCustomTheme } from "../../../hooks/useCustomTheme/useCustomTheme"
import { ISidebarItemProps } from "./SidebarItem.type"

const SidebarItem: FC<ISidebarItemProps> = ({
  onClick = () => ({}),
  icon,
  label,
  sx = {},
  isOpen
}) => {
  const theme = useCustomTheme();

  return (
    <Box
      component={'li'}
      onClick={() => onClick()}
      sx={{
        display: 'flex',
        alignItems: 'center',
        columnGap: ({ spacing }) => `${spacing(3)}`,
        padding: ({ spacing }) => `${spacing(1)} 0px`,
        cursor: 'pointer',
        ...(isOpen ? {
          borderRadius: theme.radius(),
          '&:hover': {
            background: theme.palette.grey[200],
            '& *:hover': {
              background: 'transparent'
            }
          }
        } : {}),
        ...sx
      }}>
      <IconButton>
        {icon}
      </IconButton>
      <Typography>{label}</Typography>
    </Box>
  )
}

export default SidebarItem