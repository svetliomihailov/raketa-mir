import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  H,
  P,
  Button,
  Tabs,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  Modal,
  theme,
} from '@raketa-cms/raketa-mir'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: '1200px',
          margin: '0 auto',
          backgroundColor: '#f5f5f5',
        }}
      >
        <h1>Examples</h1>

        <Tabs>
          <div title='Content'>
            <FormGroup>
              <Label>Label</Label>
              <Input type='text' />
            </FormGroup>

            <FormGroup>
              <Label>Two word label</Label>
              <Select>
                <option>Please select...</option>
              </Select>
            </FormGroup>
            <Textarea />

            <Button type='button' variant='primary'>
              Save
            </Button>
            <Button type='button' variant='secondary'>
              Cancel
            </Button>
          </div>

          <div title='Settings'>
            <H size='large'>Title of page</H>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nemo dicta nesciunt provident quod autem, optio incidunt amet,
              consequuntur laborum totam error. Illum at officia voluptate natus
              ab praesentium! Iusto.
            </P>
          </div>
        </Tabs>
      </div>

      <Modal title='Section Title'>
        <Tabs>
          <div title='Content'>
            <FormGroup>
              <Label>Label</Label>
              <Input type='text' />
            </FormGroup>

            <FormGroup>
              <Label>Two word label</Label>
              <Select>
                <option>Please select...</option>
              </Select>
            </FormGroup>
            <Textarea />

            <Button type='button' variant='primary'>
              Save
            </Button>
            <Button type='button' variant='secondary'>
              Cancel
            </Button>
          </div>

          <div title='Settings'>
            <H size='large'>Title of page</H>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nemo dicta nesciunt provident quod autem, optio incidunt amet,
              consequuntur laborum totam error. Illum at officia voluptate natus
              ab praesentium! Iusto.
            </P>
          </div>
        </Tabs>
      </Modal>
    </ThemeProvider>
  )
}

export default App
