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
  Hint,
  Select,
  Textarea,
  Modal,
  Field,
  theme,
  Container,
  Row,
  Col,
  Shift,
  PageTitle,
  Pagination,
  Navigation,
  NavItem,
  DataGrid,
  LanguageSwitcher,
} from '@raketa-cms/raketa-mir'

const App = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Examples</h1>

        <Tabs>
          <div title='Content'>
            <PageTitle>A page title!</PageTitle>
            <FormGroup>
              <Label>Label</Label>
              <Input type='text' />
              <Hint>A hint here!</Hint>
            </FormGroup>

            <FormGroup>
              <Label>Two word label</Label>
              <Select>
                <option>Please select...</option>
              </Select>
              <Hint type='error'>An Error here!</Hint>
            </FormGroup>
            <Textarea />

            <Field
              as='select'
              name='open_modal'
              label='Open modal'
              hint='Some hint'
              onChange={(e) => {
                if (e.target.value === 'opened') {
                  setOpen(true)
                } else {
                  setOpen(false)
                }
              }}
            >
              <option value='opened' selected={open}>
                Opened
              </option>
              <option value='closed' selected={!open}>
                Closed
              </option>
            </Field>

            <Field
              as='input'
              type='text'
              name='bla-bla'
              label='Some compound input with hint'
              hint='Some hint'
            />

            <Field
              as='input'
              type='text'
              name='bla-bla-bla'
              label='Some compound input with error'
              error='Error!'
            />

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

          <div title='Grid: Col 6 & Col 6'>
            <Row gutter='2em'>
              <Col s='6'>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nemo dicta nesciunt provident quod autem, optio
                  incidunt amet, consequuntur laborum totam error. Illum at
                  officia voluptate natus ab praesentium! Iusto.
                </P>
              </Col>
              <Col s='6'>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nemo dicta nesciunt provident quod autem, optio
                  incidunt amet, consequuntur laborum totam error. Illum at
                  officia voluptate natus ab praesentium! Iusto.
                </P>
              </Col>
            </Row>
          </div>

          <div title='Grid: Shift 2'>
            <Row gutter='2em'>
              <Shift s='2'>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nemo dicta nesciunt provident quod autem, optio
                  incidunt amet, consequuntur laborum totam error. Illum at
                  officia voluptate natus ab praesentium! Iusto.
                </P>
              </Shift>
            </Row>
          </div>

          <div title='Pagination'>
            <Pagination
              pagination={{ currentPage: 5, pagesCount: 25 }}
              LinkComponent={({ href, children }) => {
                const formattedHref = `${href.pathname}?page=${href.query.page}`

                return <div href={formattedHref}>{children}</div>
              }}
              router={{ query: {}, pathname: '/path' }}
            />
          </div>

          <div title='Navigation'>
            <Navigation>
              <NavItem>
                <a href='/'>
                  <img
                    style={{ filter: 'invert(1)' }}
                    alt='directions'
                    src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjc3LjMgMzUuMTFsLTMyLjEgMi4xMi0xIDMyLjkzIDMzLjYuMDUtLjUtMzUuMXpNMTUxLjcgODguMDRMNjcuOTYgMTE4LjkgMTUyIDE2OS4ybDE4OC02LjIgMi40LTc0LjcyLTE5MC43LS4yNHpNMjc5LjIgMTgzbC0zOC4zIDEuMy0uOCAyNy44IDM5LjUgMS4yLS40LTMwLjN6bS05My4xIDQ1LjZsLjggNjQuMiAyMDAuNC45IDUxLjctMjkuMi01NS44LTMwLjItMTk3LjEtNS43em01MS4xIDgyLjVsLTUgMTc1LjMgNTAuOS42LTIuMy0xNzUuNy00My42LS4yeiI+PC9wYXRoPjwvc3ZnPgo='
                  />
                </a>
              </NavItem>
              <NavItem active>
                <a href='/'>
                  <img
                    style={{ filter: 'invert(1)' }}
                    alt='directions'
                    src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjc3LjMgMzUuMTFsLTMyLjEgMi4xMi0xIDMyLjkzIDMzLjYuMDUtLjUtMzUuMXpNMTUxLjcgODguMDRMNjcuOTYgMTE4LjkgMTUyIDE2OS4ybDE4OC02LjIgMi40LTc0LjcyLTE5MC43LS4yNHpNMjc5LjIgMTgzbC0zOC4zIDEuMy0uOCAyNy44IDM5LjUgMS4yLS40LTMwLjN6bS05My4xIDQ1LjZsLjggNjQuMiAyMDAuNC45IDUxLjctMjkuMi01NS44LTMwLjItMTk3LjEtNS43em01MS4xIDgyLjVsLTUgMTc1LjMgNTAuOS42LTIuMy0xNzUuNy00My42LS4yeiI+PC9wYXRoPjwvc3ZnPgo='
                  />
                </a>
              </NavItem>

              <NavItem active>
                <LanguageSwitcher
                  current='EN'
                  navigation={[
                    { path: '/bg/', label: 'BG' },
                    { path: '/de/', label: 'DE', newItem: true },
                  ]}
                />
              </NavItem>
            </Navigation>
          </div>

          <div title='DataGrid'>
            <DataGrid
              list={[
                { name: 'Test', slug: '/test' },
                { name: 'Another test', slug: '/another-test' },
              ]}
              header={() => (
                <>
                  <th>Name</th>
                  <th>URL</th>
                </>
              )}
              row={({ name, slug }) => (
                <>
                  <td>{name}</td>
                  <td>{slug}</td>
                </>
              )}
            />
          </div>
        </Tabs>
      </Container>

      {open && (
        <Modal title='Section Title' onClose={() => setOpen(false)}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias nemo dicta nesciunt provident quod autem, optio
                incidunt amet, consequuntur laborum totam error. Illum at
                officia voluptate natus ab praesentium! Iusto.
              </P>
            </div>
          </Tabs>
        </Modal>
      )}
    </ThemeProvider>
  )
}

export default App
