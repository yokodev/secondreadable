import React, {Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

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
    return(
        <div className="ctoolbar">
          <Button.Group>
            <Button icon='edit' onClick={editHandler} />
            <Button icon='trash outline' color="red" onClick={this.show} />
          </Button.Group>
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
