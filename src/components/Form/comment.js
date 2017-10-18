import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class CommentForm extends Component {

  componentDidMount(){
   console.log(`this props componentDidMount`,this.props)
   let {payload}=this.props
   payload && this.setState({body:payload.body, payload })
  }

  state = {edit:false, body:''}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    console.log('props en handleSubmit en  GralForm component: ',this.props);
    // this.props.edit
    // ? this.props.onSubmit({state:this.state, id:this.props.edit.id})
    // : this.props.onSubmit(this.state)
    console.log('el stado',this.state);
    this.props.onSubmit(this.state)
    this.setState({ body:''})
 }

 handleCancel = (e) => this.props.onCancel()

  render() {
    // console.log('en el form cherada',this.props);
    const {mainButton,mainIcon}= this.props
    const { body } = this.state
    return (
      <Form reply onSubmit={this.handleSubmit}>
        <Form.TextArea label='Body' name="body" placeholder='Post Body ' required value={body} onChange={this.handleChange} />
        <Button content={mainButton} labelPosition="left" icon={mainIcon} primary />
        <Button  formNoValidate content="Cancel" onClick={this.handleCancel} labelPosition="left" icon="cancel" negative />
      </Form>
    )
  }
}

export default CommentForm
