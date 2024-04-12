// ** MUI Imports
import Grid from '@mui/material/Grid'
import "./pageHeader.css"
const PageHeader = props => {
  // ** Props
  const { title, subtitle, action } = props

  return (<div className='page-header'>
    <div>
      {title}
      {subtitle || null}
    </div>
    <div className='page-action'>{action}</div>
  </div>
  )
}

export default PageHeader
