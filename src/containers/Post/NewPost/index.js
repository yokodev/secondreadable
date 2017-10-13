import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, Dimmer } from 'semantic-ui-react'
import CatToArraySelector from 'containers/Categories/selectors'
import Form from 'components/Form'
import { createNewPost } from './actions'

class AddPost extends Component {
  state = {
    loading: false
  }

  createNewPost = data => {
    console.log('creating new Post with this props en createnewpost: ', this.props)
    console.log('data from form: ', data)
    this.setState({ loading: true })
    this.props.dispatch(
      createNewPost(data, () => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
    )
  }
  onCancel = e => {
    this.props.history.push('/')
  }

  render() {
    // console.log(`props en new form`,this.props);
    return (
      <div>
        <Dimmer active={false}>
          <Loader />
        </Dimmer>
        <Form
          categories={this.props.categories}
          formTitle="Add New Post"
          onSubmit={this.createNewPost}
          onCancel={this.onCancel}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({ categories: CatToArraySelector(state) })

export default connect(mapStateToProps)(AddPost)
