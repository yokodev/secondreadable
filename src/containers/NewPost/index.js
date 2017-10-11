import React, {Component }  from 'react'
import {connect} from 'react-redux'
// import { Button, Form, Segment, Header } from 'semantic-ui-react'
// import * as Utils from 'utils'
import { push } from 'react-router-redux';
import CatToArraySelector from 'containers/Categories/selectors'
import Form from 'components/Form'
import {createNewPost} from './actions'
class AddPost extends Component{

   createNewPost = () => {
     console.log('props en createnewpost: ',this.props);
    //  this.props.createNewPost(this.state,
    //    ()=>{
    //      this.props.getPosts()
    //      this.props.history.push('/')
    //    }
    //  )
    //  this.props.onSubmit(this.state)
 }
  onCancel = (e) =>{
    console.log(this.props);
  }

  render(){
    console.log(`props en new form`,this.props);

    return(
        <Form  categories={this.props.categories} formTitle="Add New Post" onSubmit={this.createNewPost} onCancel={this.onCancel} />
    )
  }
}
const mapStateToProps= (state)=>({categories:CatToArraySelector(state)})

export default connect(mapStateToProps)(AddPost)
