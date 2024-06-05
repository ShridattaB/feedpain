// ** MUI Imports
import { useTheme } from '@mui/material/styles'

export const hexToRGBA = (hexCode, opacity) => {
  let hex = hexCode.replace('#', '')
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
 
const UseBgColor = () => { 

  return {
    primary: {
      color: `rgb(105, 108, 255)`,
      backgroundColor: `rgba(105, 108, 255, 0.16)`,
    },
    secondary: {
      color: `rgb(133, 146, 163)`,
      backgroundColor: `rgba(133, 146, 163, 0.16)`
    },
    success: {
      color: `rgb(113, 221, 55)`,
      backgroundColor: `rgba(113, 221, 55, 0.16);}`
    },
    error: {
      color: `rgb(255, 62, 29)`,
      backgroundColor: `rgba(255, 62, 29, 0.16)`
    },

    warning: {
      color: `rgb(255, 171, 0)`,
      backgroundColor: `rgba(255, 171, 0, 0.16)`
    },
    info: {
      color: `rgb(3, 195, 236)`,
      backgroundColor: `rgba(3, 195, 236, 0.16)`
    }

  }
}

export default UseBgColor
