import React, {Component }  from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'
import * as Utils from 'utils'


class GralForm extends Component{

   componentDidMount(){
    console.log(`this props componentDidMount`,this.props)
    let {edit}=this.props
    edit && this.setState({edit:true,title:edit.title, body:edit.body, category:edit.category })
   }

   state = {edit:false, title:''}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

   handleSubmit = () => {
    //  console.log('props en handleSubmit en  GralForm component: ',this.props.edit.id);
     this.props.edit
     ? this.props.onSubmit({state:this.state, id:this.props.edit.id})
     : this.props.onSubmit(this.state)
     this.setState({ body: '',author: '',category: '', title: '' })
  }

  handleCancel = (e) =>{
    console.log('handleCancel GralForm ',this.props);
    this.props.onCancel()
  }

  catToOptions = categories =>{
    let options=[]
    categories && categories.length>0
    ? categories.map((cat)=>
      options.push({ key: cat.path, text: Utils.makeCapital(cat.name), value: cat.name })
      )
    : options.push({ key: 'path', text: 'Loading', value: '' })
    return options
  }

  render(){
    console.log(`props en render new Gralform `,this.props);
    const catOptions = this.catToOptions(this.props.categories)
    const {formTitle} = this.props
    const { title, body, category,edit } = this.state


    return(
      <Segment raised size="large" >
      <Header as='h1' attached='top' textAlign="center">
        {formTitle}
      </Header>
      <Segment raised size="large" >
      <Form onSubmit={this.handleSubmit} widths='equal'>
        <Form.Input label="Title" placeholder='Title' name='title' value={title} required onChange={this.handleChange}  />
        <Form.TextArea label='Body' name="body" placeholder='Post Body ' required value={body} onChange={this.handleChange} />
        <Form.Select label='Category' name="category" value={category} disabled={edit}
          options={catOptions} placeholder='Categories' required onChange={this.handleChange} />
        <Button type='submit'>Submit</Button>
        <Button  onClick={this.handleCancel} formNoValidate >Cancel</Button>
      </Form>
      </Segment>
    </Segment>
    )
  }
}

export default GralForm
