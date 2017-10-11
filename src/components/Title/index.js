import React from 'react'
import { Header } from ' semantic-ui-react'

const Title = ({ title }) => (
  <Header as="h1" attached="top" textAlign="center">
    {title}
  </Header>
)

export default Title
