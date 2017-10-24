import React, { Component } from 'react';
import { Message, Button, Form, Segment, Header } from 'semantic-ui-react';
import * as Utils from 'utils';

class GralForm extends Component {
  componentDidMount() {
    const { edit } = this.props;
    edit &&
      this.setState({
        edit: true,
        title: edit.title,
        body: edit.body,
        category: edit.category,
        author: edit.author
      });
  }

  state = { edit: false, author:'', title: '', body:'', category:'', formError:false, titleError:false, bodyError:false, categoryError:false };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  reviewForm = ()=>{
    const {category } = this.state
    let formErrorStatus  
    // title && title !== "" ? this.setState({ titleError: false,formError: false }) : this.setState({ titleError: true, formError: true }) 
    // body && body !== "" ? this.setState({bodyError:false, formError:false}): this.setState({bodyError:true, formError:true}) 
    category !== undefined && category !== "" 
    ? formErrorStatus =false: formErrorStatus= true
    
    !formErrorStatus
    ? this.setState((prevState,props)=>({categoryError:false, formError:false}))
    : this.setState((prevState,props)=>({categoryError:true, formError:true}))
    return formErrorStatus
  }

  
  handleSubmit = () => {
    const formStatusOk= this.reviewForm()
    switch (this.state.edit) {
      case true:{
        !formStatusOk && this.props.onSubmit({
            state: this.state,
            id: this.props.edit.id
          })
          break
      }
      default:{
        !formStatusOk && this.props.onSubmit(this.state) &&
        this.setState({ body: '', author: '', category: '', title: '' }) 
        break
      }
    }
  }

  handleCancel = e => {
    this.props.onCancel();
  }

  catToOptions = categories => {
    let options = [];
    categories && categories.length > 0
      ? categories.map(cat =>
          options.push({
            key: cat.path,
            text: Utils.makeCapital(cat.name),
            value: cat.name
          })
        )
      : options.push({ key: 'path', text: 'Loading', value: '' });
    return options;
  }

  render() {
    const catOptions = this.catToOptions(this.props.categories);
    const { formTitle } = this.props;
    const { title, body, category, edit, author } = this.state;

    return <Segment raised size="large">
        <Header as="h1" attached="top" textAlign="center">
          {formTitle}
        </Header>
        <Segment raised size="large">
          <Form onSubmit={this.handleSubmit} widths="equal" error={this.state.formError}>
            <Message error header="Error" content="All Fields are Required" />
            <Form.Input label="Title" placeholder="Title" name="title" value={title} required error={this.state.titleError} onChange={this.handleChange} />
            <Form.TextArea label="Body" name="body" placeholder="Post Body " required value={body} error={this.state.bodyError} onChange={this.handleChange} />
            <Form.Select label="Category" name="category" value={category} disabled={edit} options={catOptions} placeholder="Category" required error={this.state.categoryError} onChange={this.handleChange} />
            <Form.Input label="Author" placeholder="Author" name="author" required disabled={edit} value={author} onChange={this.handleChange} />
            <Button type="submit">Submit</Button>
            <Button onClick={this.handleCancel} formNoValidate>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Segment>
  }
}

export default GralForm;
