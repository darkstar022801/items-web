import React, { useState, useContext } from 'react'
import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
    IconButton,
    Grid,
    Tooltip,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    Paper,
} from '@material-ui/core'
import { DropzoneArea } from 'material-ui-dropzone'

import { ImageContext } from './../../_core-modules/_contexts'

import { useStyles } from './styles'

export const ImageBank = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    //const [files, setFiles] = useState([])
    //const ref = createRef()

    const { files, upload } = useContext(ImageContext)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const handleDragAndDropChange = files => {
        console.log('Files:', files)
        upload(files)
    }

    return (
        <div className={classes.root}>
            <Paper square style={{ padding: 20, marginBottom: 20 }}>
                <Grid
                    justify="space-between"
                    container
                    spacing={10}
                >
                    <Grid item>
                        <Typography variant="h4">Create an Image Bank</Typography>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Add an Image Bank">
                            <IconButton>
                                <AddIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Paper>

            <ExpansionPanel expanded={expanded === 'panel1'} onChange={(handleChange('panel1'))}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>General settings</Typography>
                    <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <DropzoneArea
                        acceptedFiles={['image/*']}
                        filesLimit={10}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={handleDragAndDropChange}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>


            {/* 
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Users</Typography>
                    <Typography className={classes.secondaryHeading}>
                        You are currently not an owner
          </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                        diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel> */}



            {/* <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Advanced settings</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Filtering has been entirely disabled for whole web server
          </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel> */}


            {/* 
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Personal data</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel> */}

        </div>
    )
}