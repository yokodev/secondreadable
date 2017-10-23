import React, { Component } from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import * as Utils from 'utils';

class GralForm extends Component {
  componentDidMount() {
    const { edit } = this.props;
    edit &&
      this.setState({
        edit: true,
        title: edit.title,
        body: edit.body,
        category: edit.category
      });
  }

  state = { edit: false, title: '', error:false };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    if(this.state.category === undefined){
      this.setState({error:true})
      return
    }
    this.props.edit
      ? this.props.onSubmit({ state: this.state, id: this.props.edit.id })
      : this.props.onSubmit(this.state);
    this.setState({ body: '', author: '', category: '', title: '' });
  };

  handleCancel = e => {
    this.props.onCancel();
  };

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
  };

  render() {
    const catOptions = this.catToOptions(this.props.categories);
    const { formTitle } = this.props;
    const { title, body, category, edit } = this.state;

    return (
      <Segment raised size="large">
        <Header as="h1" attached="top" textAlign="center">
          {formTitle}
        </Header>
        <Segment raised size="large">
          <Form onSubmit={this.handleSubmit} widths="equal">
            <Form.Input
              label="Title"
              placeholder="Title"
              name="title"
              value={title}
              required
              onChange={this.handleChange}
            />
            <Form.TextArea
              label="Body"
              name="body"
              placeholder="Post Body "
              required
              value={body}
              onChange={this.handleChange}
            />
            <Form.Select
              label="Category"
              name="category"
              value={category}
              disabled={edit}
              options={catOptions}
              placeholder="Category"
              required
              error= {this.state.error }
              onChange={this.handleChange}
            />
            <Button type="submit">Submit</Button>
            <Button onClick={this.handleCancel} formNoValidate>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Segment>
    );
  }
}

export default GralForm;
