import React, {Component } from 'react'
import {Icon, Button, Confirm } from 'semantic-ui-react'
import './toolbar.css'
class ToolBar extends Component{

  state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => {
      this.setState({ open: false })
      this.props.deleteHandler()
    }
    handleCancel = () => this.setState({ open: false })


  render(){
    const {editHandler}= this.props
    // minitinysmallmediumlargebighugemassive
    return(
        <div>
          <Icon.Group className='crud-toolbar' size='large'  >
            <Icon link name='edit'  onClick={editHandler} />
            <Icon link name='trash outline' color="red" onClick={this.show} />
          </Icon.Group>
          <Confirm
            header='Delete post?'
            open={this.state.open}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
      </div>
    )
  }
}

export default ToolBar
{/* <Button.Group size='mini' >
  <Button icon='edit'  onClick={editHandler} />
  <Button icon='trash outline' color="red" onClick={this.show} />
</Button.Group> */}
