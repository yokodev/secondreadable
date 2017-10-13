import React, {Component }  from 'react'
import {connect} from 'react-redux'
import { Loader, Dimmer } from 'semantic-ui-react'
import CatToArraySelector from 'containers/Categories/selectors'
import Form from 'components/Form'
import {editPost,} from './actions'
import {getPostDetail} from '../Detail/actions'


class EditPost extends Component{

  state={
    loading:false
  }

   onEditPost = (data,other) => {
     console.log('edit  Post with this props en Editpost: ',this.props);
     console.log('data from form: ',data);
     let {id, state:{body,title}}=data
     this.setState({loading:true})

     this.props.dispatch(editPost({id,title,body}, ()=>{
       this.setState({loading:false})
       this.props.history.push('/')
       }
     ))
 }
  onCancel = (e) =>{
    // console.log('onCancel fired ',this.props);
    this.props.history.push('/')
  }
  loadPostData = ()=>{
    console.log('edit  Post with this props en Editpost: ',this.props);
    console.log(`loading data for form `);
  }

  render(){
    // console.log(`props en EDIT form`,this.props)
    let {location:{state:{postToEdit}},categories}=this.props

    return(
      <div>
        <Dimmer active={this.state.loading}>
         <Loader />
       </Dimmer>
       <Form edit={postToEdit} categories={categories} formTitle="Edit Post" onSubmit={this.onEditPost} onCancel={this.onCancel} />
      </div>

    )
  }
}
const mapStateToProps= (state)=>({categories:CatToArraySelector(state)})

export default connect(mapStateToProps)(EditPost)
