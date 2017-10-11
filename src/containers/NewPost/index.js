import React, {Component }  from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'
import * as Utils from 'utils'

class ReadForm extends Component{
   state = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

   handleSubmit = () => {
    //  console.log(this.state);
     this.setState({ body: '',author: '',category: '', title: '' })
     console.log('props en newpost: ',this.props);
    //  this.props.createNewPost(this.state,
    //    ()=>{
    //      this.props.getPosts()
    //      this.props.history.push('/')
    //    }
    //  )
    //  this.props.onSubmit(this.state)
 }
  handleCancel = (e) =>{
    e.preventDefault()
    console.log(this.props);
    // this.props.onCancel()
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
    // console.log(`props en new form`,this.props);
    const catOptions = this.catToOptions(this.props.categories)
    const { body, author, category, title } = this.state
    console.log('render en form');

    return(
      <Segment raised size="large" >
      <Header as='h2' attached='top' textAlign="center">
        Add Post
      </Header>
      <Segment raised size="large" >
      <Form onSubmit={this.handleSubmit} widths='equal'>
        <Form.Input label="Title" placeholder='Title' name='title' value={title} required onChange={this.handleChange}  />
        <Form.Input label="Author" placeholder='Author' name='author' value={author} required onChange={this.handleChange} />
        <Form.TextArea label='Body' name="body" placeholder='Post Body ' required value={body} onChange={this.handleChange} />
        <Form.Select label='Category' name="category" value={category}
          options={catOptions} placeholder='Categories' required onChange={this.handleChange} />
        <Button type='submit'>Submit</Button>
        <Button  onClick={this.handleCancel} formNoValidate >Cancel</Button>
      </Form>
      </Segment>
    </Segment>
    )
  }
}


export default ReadForm
