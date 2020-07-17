# @raketa-cms/raketa-mir

> Raketa Design System

[![NPM](https://img.shields.io/npm/v/@raketa-cms/raketa-mir.svg)](https://www.npmjs.com/package/@raketa-cms/raketa-mir) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @raketa-cms/raketa-mir
```

## Usage

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Textarea, theme } from '@raketa-cms/raketa-mir'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Textarea />
    </ThemeProvider>
  )
}

export default App
```

## License

MIT © [studioraketa](https://github.com/studioraketa)
