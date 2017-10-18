import React from 'react'
import {Button, Image} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
import image from 'assets/images/Page-not-found.png'

const PageNotFound = (props)=>
<div>
  <Button primary negative onClick={()=>props.history.push('/')}>Go Back</Button>
<Image as='a'  src={image} fluid />
</div>

 export default PageNotFound
