import React from 'react' 
import PropTypes from 'prop-types' 
import SwipeableViews from 'react-swipeable-views' 
import { useTheme } from '@material-ui/core/styles' 
import AppBar from '@material-ui/core/AppBar' 
import Tabs from '@material-ui/core/Tabs' 
import Tab from '@material-ui/core/Tab' 
import Box from '@material-ui/core/Box' 


import BackupIcon from '@material-ui/icons/Backup' 
import MenuBookIcon from '@material-ui/icons/MenuBook'

import Tooltip from '@material-ui/core/Tooltip'

import { ImageBank } from './ImageBank'


function TabPanel(props) {
    const { children, value, index, ...other } = props 

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    ) 
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
} 

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    } 
}

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       backgroundColor: theme.palette.background.paper,
//       width: 500,
//     },
//   })) 

export const Items = props => {
    //const classes = useStyles() 
    const theme = useTheme() 
    const [value, setValue] = React.useState(0) 

    //const ref = createRef()

    const handleChange = (event, newValue) => {
        setValue(newValue) 
    } 

    const handleChangeIndex = (index) => {
        setValue(index) 
    } 

    return (
        <>

            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >

                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab icon={<Tooltip title="Configure Menu"><MenuBookIcon /></Tooltip>} {...a11yProps(1)} />
                    <Tab icon={<Tooltip title="Upload Images"><BackupIcon /></Tooltip>} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>Item One</TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>Item Two</TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}><ImageBank /></TabPanel>
            </SwipeableViews>
        </>
    )
}
