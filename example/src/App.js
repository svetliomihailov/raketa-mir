import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Textarea, theme } from '@raketa-cms/raketa-mir'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: '1200px', margin: '0 auto' }}>
        <h1>Examples</h1>

        <Textarea />
      </div>
    </ThemeProvider>
  )
}

export default App
