import React, { Component } from "react";
import "../App.css";
import bootstrap, {
	Container,
	Row,
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Col,
	Image,
	InputGroup,
} from "react-bootstrap";
import logo from "./images/logo.png";

class NavBar extends Component {
	state = {};

	render() {
		return (
			<div>
				<Navbar
					className='mb-4'
					style={{ height: 50 }}
					bg='light'
					expand='lg'>
					<Container>
						<Row className='align-items-center justify-content-center mt-3'>
							<Col md={1}>
								<Image
									style={{
										height: 50,
										width: 50,
										marginBottom: "15px",
									}}
									src={logo}
								/>
							</Col>
							<Col md={4}>
								<Form inline>
									<InputGroup>
										<FormControl
											aria-label='search'
											aria-describedby='basic-addon1'
											placeholder='Search'
											className='mr-sm-2 mb-3'
											value={this.props.searchString}
											onKeyDown={this.props.handleSearch}
											onChange={this.props.handleSearch}
											style={{ width: "390px" }}
										/>
									</InputGroup>
								</Form>

								{/* <Form inline>
									<InputGroup className='icons'>
										<FormControl
											className='mr-sm-2 searchBar'
											placeholder='Search and press enter'
											aria-label='search'
											aria-describedby='basic-addon1'
											onKeyDown={this.searchStringHandler}
											onChange={this.searchStringHandler}
											value={this.state.searchStringg}
										/>
									</InputGroup>
								</Form> */}
							</Col>
							<Col md={1}>
								<Nav.Link href='#home'>
									<i className='fas nav-icons fa-home '>
										<br />
										<p className='nav-icon-text'>Home</p>
									</i>
								</Nav.Link>
							</Col>
							<Col md={1}>
								<Nav.Link href='#link'>
									<i className='fas nav-icons fa-network-wired '>
										<br />
										<p className='nav-icon-text'>
											MyNetwork
										</p>
									</i>
								</Nav.Link>
							</Col>
							<Col md={1}>
								<Nav.Link href='#home'>
									<i className='fas nav-icons fa-briefcase '>
										<br />
										<p className='nav-icon-text'>Jobs</p>
									</i>
								</Nav.Link>
							</Col>
							<Col md={1}>
								<Nav.Link href='#link'>
									<i className=' nav-icons far fa-comment-dots '>
										<br />
										<p className='nav-icon-text'>
											Messaging
										</p>
									</i>
								</Nav.Link>
							</Col>
							<Col md={1}>
								<Nav.Link href='#link'>
									<i className='fas nav-icons fa-bell '>
										<br />
										<p className='nav-icon-text'>
											Notifications
										</p>
									</i>
								</Nav.Link>
							</Col>
							<Col md={1}>
								<Nav.Link href='#link'>
									<i className='fas nav-icons fa-user-circle '>
										<br />
										<p className='nav-icon-text'>Me</p>
									</i>
								</Nav.Link>
							</Col>
							<Col md={1}>
								<Nav.Link href='#link'>
									<i className='fas nav-icons fa-bars '>
										<br />
										<p className='nav-icon-text'>Works</p>
									</i>
								</Nav.Link>
							</Col>
						</Row>
					</Container>
				</Navbar>
			</div>
		);
	}
}
export default NavBar;
