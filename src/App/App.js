import React, { useState } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { AppBar } from './../_components/AppBar'
import { Drawer } from './../_components/Drawer'
import { theme } from './../misc'

import { Chat } from './../Chat'
import { Home } from './../Home'
import { Locations } from './../Locations'
import { Items } from './../Items'
import { Feed } from './../Feed'

import { SignIn } from './../Auth/SignIn'

import { useStyles } from './styles'

export const App = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Route path="/signin" component={SignIn} />
      </HashRouter>

      <div className={classes.root}>
        <AppBar title="Items Web Portal" handleDrawerOpen={handleDrawerOpen} open={open} />

        <HashRouter>
          <Drawer handleDrawerClose={handleDrawerClose} open={open} />
        </HashRouter>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <HashRouter>
            <Route path="/chat">
              <Chat open={open} />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/feed" component={Feed} />
            <Route path="/locations" component={Locations} />
            <Route path="/items" component={Items} />
          </HashRouter>
        </main>
      </div>
    </ThemeProvider>
  )
}
