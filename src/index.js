import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import {
  AuthProvider,
  FeedProvider,
  HomeProvider,
  ImageProvider,
  ItemProvider,
  LocationProvider,
} from './_core-modules/_contexts'

ReactDOM.render(
  // <React.StrictMode>
  <AuthProvider>
    <FeedProvider>
      <HomeProvider>
        <ImageProvider>
          <ItemProvider>
            <LocationProvider>
              <App />
            </LocationProvider>
          </ItemProvider>
        </ImageProvider>
      </HomeProvider>
    </FeedProvider>
  </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
) 
