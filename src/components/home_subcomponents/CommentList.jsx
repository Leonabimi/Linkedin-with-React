import React from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
class CommentList extends React.Component {
	state = {
		comments: [],
		isLoading: true,

		deletedSize: 0,
		errorMessage: false,
	};

	getComments = async () => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.postId,
				{
					headers: new Headers({
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);

			if (response.ok) {
				let comments = await response.json();

				this.setState({ comments, isLoading: false });
			} else {
				this.setState({ isLoading: false, errorMessage: true });
			}
		} catch (e) {
			this.setState({ isLoading: false, errorMessage: true });
		}
	};

	handleDelete = async (e) => {
		let id = e.currentTarget.id;
		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${id}`,
				{
					method: "DELETE",
					headers: new Headers({
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);

			if (response.ok) {
				let filteredComments = this.state.comments.filter(
					(comment) => comment._id !== id
				);
				this.setState({
					comments: filteredComments,
					isloading: false,
					deletedSize: this.state.deletedSize + 1,
				});
			} else {
				alert("something went wrong :(");
			}
		} catch (err) {
			console.log(err);
			this.setState({ isLoading: false, errorMessage: true });
		}
	};

	// componentWillUnmount() {
	// 	this.getComments();
	// }

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.submittedSize !== this.props.submittedSize) {
			this.getComments();
			// this.setState({ update: !this.state.update });
		}
		if (prevProps.fetchComment !== this.props.fetchComment) {
			this.getComments();
		}
	}
	render() {
		let body;
		let { user } = this.state;
		if (!this.state.isLoading && this.state.comments.length !== 0) {
			body = (
				<div className='mb-5'>
					{this.state.comments.map((comment, index) => {
						return (
							<div className='d-flex flex-row'>
								<img
									className='comment-user-avatar mt-1'
									src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
									alt='comment-user-avatar'
								/>
								<ListGroup
									key={index}
									className='comment-item d-flex justify-content-between mb-3'>
									<ListGroup.Item className='text-dark d-flex flex-column'>
										{/* <div>
										<img
											className='user-img float-left'
											src={comment.author.image}
											alt='user-avatar'
										/>
										<div className='user-info float-left d-flex flex-column'>
											<Link
												to={`/profile/${comment.author._id}`}>
												<h5 className='ml-0'>
													{comment.author.name}{" "}
													{comment.author.surname}
													&middot; <span>1st</span>
												</h5>
											</Link>
											<p
												style={{
													textAlign: "left",
												}}
												className='ml-2 '>
												{comment.author.title}
											</p>
										</div>

										<div className='mt-1 '>
											<i className='three-dot float-right fas fa-ellipsis-h'></i>
										</div>
									</div> */}
										<p
											style={{ textAlign: "left" }}
											className='float-left'>
											{comment.comment}
										</p>
									</ListGroup.Item>
								</ListGroup>
							</div>
						);
					})}
				</div>
			);
		} else if (
			this.state.comments.length === 0 &&
			!this.state.isLoading &&
			!this.state.errorMessage
		) {
			body = (
				<div className='d-flex justify-content-center align-items-center mt-3'></div>
			);
		} else if (this.state.errorMessage) {
			body = (
				<div className='d-flex justify-content-center align-items-center mt-3'>
					<Alert variant='danger'>
						&#9762; Something went wrong!
					</Alert>
				</div>
			);
		} else {
			body = (
				<Spinner
					className='comment-spinner'
					animation='grow'
					variant='primary'
				/>
			);
		}
		return body;
	}
}

export default CommentList;
