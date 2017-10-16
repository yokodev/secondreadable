import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class CommentForm extends Component {


 //  componentDidMount(){
 //   console.log(`this props componentDidMount`,this.props)
 //   let {edit}=this.props
 //   edit && this.setState({edit:true,title:edit.title, body:edit.body, category:edit.category })
 //  }
 //
  state = {edit:false, body:''}
 //
 handleChange = (e, { name, value }) => this.setState({ [name]: value })
 //
  handleSubmit = () => {
    // console.log('props en handleSubmit en  GralForm component: ',this.props.edit.id);
    console.log('props en handleSubmit en  GralForm component: ',this.props);
    // this.props.edit
    // ? this.props.onSubmit({state:this.state, id:this.props.edit.id})
    // : this.props.onSubmit(this.state)
    console.log('el stado',this.state);
    this.props.onSubmit(this.state)
    this.setState({ body:''})
    // this.props.onCancel()
 }

 handleCancel = (e) =>{
   console.log('handleCancel GralForm ',this.props);
   this.props.onCancel()
 }


  render() {
    const {mainButton,mainIcon}= this.props
    const { body } = this.state
    return (
      <Form reply onSubmit={this.handleSubmit}>
        <Form.TextArea label='Body' name="body" placeholder='Post Body ' required value={body} onChange={this.handleChange} />
        <Button content={mainButton} labelPosition="left" icon={mainIcon} primary />
        <Button content="Cancel" onClick={this.handleCancel} labelPosition="left" icon="cancel" negative />
      </Form>
    )
  }
}

export default CommentForm
