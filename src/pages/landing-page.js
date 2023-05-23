import './landing-page.css';

//import bootstrap component
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';


const Landing = () => {
	return (
		<>
			{/* start navBar */}
			<div className='mx-5'>
				<Navbar bg='transparent' expand='lg' className='mt-3'>
                    
					<Navbar.Brand>
                        <a href='/rent-it-website-t-r-y'> <img src="bgrb.svg" alt='logo' style={{ width: "249px"}}  /></a>
                   
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link as={Link} to='/signup-page' className='fs-5 btn btn-outline-info fw-bold mx-2 px-3 my-sm-3'>
								Signup
							</Nav.Link>
							<Nav.Link as={Link} to='/log-in-page' className='fs-5 btn btn-outline-info fw-bold mx-2 px-4 my-sm-3'>
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			{/* end navBar */}
			{/* start hero */}
			<section className='hero py-5'>
				<div className='container '>
					<div className='row d-flex align-items-center justify-content-between'>
						<div className='col-md-3 text-sm-center py-sm-2'>
							<h1>Welcome!</h1>
						</div>
						<div className='col-md-7'>
							<img src="/Online world-pana 1.svg" alt='hero_img' className='w-100' />
						</div>
					</div>
				</div>
			</section>
			{/* end hero */}
			{/* start hashtag */}
			<section className='hashTag py-5'>
				<div className='container'>
					<div className='row align-items-center justify-content-between'>
						<div className='col-md-6'>
							<div className='hashTag_img'>
								<img src="/Building hashtag-pana 1.svg" alt='hashTag_img' className='w-100' />
							</div>
						</div>
						<div className='col-md-5'>
							<div className=' section-text py-sm-5'>
								<p>hellllllllllo</p>
								<p>
                                With RentTech you can flexibly rent technology. It's that easy: Order, Enjoy, Send back. Get all the technology you love whenever you want. Discover RentTech
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end hashtag */}
			{/* start screen */}
			<section className='screen py-5'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-md-5 py-sm-3'>
							<div className='section-text '>
								<p>
									<span className='text-primary fw-bold fs-3'>RentTech</span> Find out how you can rent your favorite tech, what advantages it has and how we use fewer resources together.


								</p>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='screen_img'>
								<img src="/Webinar-pana 1.png" alt='screen_img' className='w-100' />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end screen */}
			{/* start previews */}
			<div className='previews py-5'>
				<div className='container'>
					<div className='row align-items-center justify-content-between'>
						<div className='col-md-6'>
							<div className='previews_img'>
								<img src="/Online Review-pana 1.png" alt='previews' className='w-100' />
							</div>
						</div>
						<div className='col-md-5'>
							<div className='preview_text  text-sm-center '>
								<h2 className='py-3'>Our Message</h2>
								<p className='fs-5'>
									All devices are protected with RentTech Care. In the event of damage, we cover 90% of the repair costs (50% for drones). So you can use tech worry-free.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end previews */}
			{/* start  footer */}
			<footer className=' py-5 '>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className='col-md-1'>
							<img src="bgrb.svg" alt='logo' />
						</div>
						<div className="col-md-4">
							<h2 className='text-white'>Contact us </h2>
							{<Link className='text-decoration-none text-white'>renttech@gmail.com</Link> }
						</div>
					</div>
				</div>
			</footer>
			{/* end  footer */}
		</>
	);
};
export default Landing;
