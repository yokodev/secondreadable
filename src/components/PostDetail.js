import React , {Component } from 'react'
import SinglePost from './SinglePost'


class PostDetail extends Component {
	render(){
		console.log(`this props on detail: `,this.props)
		const {id}= this.props
		return(
			<div>
				<h1> Heelloworld  </h1>
				{/* <SinglePost /> */}
			</div>
		)
	}
	
}
export default PostDetail;