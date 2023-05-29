import "./landing-page.css";

//import bootstrap component
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import { Link } from "react-router-dom";


const Landing = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			{/* start navBar */}


			{/* end navBar */}
			<div style={{ height: "800px", backgroundColor: "black" }} class="row mx-0">
				<Carousel style={{ height: "100%", paddingRight: "0", paddingLeft: "0" }} activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item style={{ height: "800px", width: "100%" }}>
						<img
							className="d-block w-100 h-100"
							src="/third.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item style={{ height: "800px" }}>
						<img
							className="d-block w-100 h-100"
							src="/second.jpg"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item style={{ height: "800px" }}>
						<img
							className="d-block w-100 h-100"
							src="/first.jpg"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div style={{ position: "absolute", top: "0" }}>
					<Navbar style={{ backgroundColor: "transparent", zIndex: "100" }} expand="lg">
						<Navbar.Brand>
							<a href="/rent-it-website-t-r-y">
								{" "}
								<img src="logoabyd.svg" alt="logo" style={{ width: "149px" }} />
							</a>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto">
								<Nav.Link
									as={Link}
									to="/signup-page"
									style={{ color: "white" }}
									className="fs-5 btn fw-bold mx-2 px-3 my-sm-3"
								>
									Signup
								</Nav.Link>
								<Nav.Link
									as={Link}
									to="/log-in-page"
									style={{ color: "white" }}
									className="fs-5 btn fw-bold mx-2 px-4 my-sm-3"
								>
									Login
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
			{/* start hero */}
			<section className="hero py-5" style={{ backgroundColor: "black", color: "white", paddingBottom: "250px" }}>
				<div className="container ">
					<div className="row d-flex align-items-center justify-content-between">
						<div className="col-md-3 text-sm-center py-sm-2">
							<h1>Welcome!</h1>
						</div>
						<div className="col-md-7">
							<img
								src="/one.jpg"
								alt="hero_img"
								className="w-100"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* end hero */}
			{/* start hashtag */}
			<section className="hashTag py-5" style={{ backgroundColor: "black", color: "white", paddingBottom: "250px", marginTop: "50px" }}>
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-md-6">
							<div className="hashTag_img">
								<img
									src="/two.jpg"
									alt="hashTag_img"
									className="w-100"
									style={{ borderRadius: "80px", borderTopRightRadius: "50%", borderBottomLeftRadius: "50%" }}
								/>
							</div>
						</div>
						<div className="col-md-5">
							<div className=" section-text py-sm-5">
								<p>
									With RentTech you can flexibly rent technology. It's that
									easy: Order, Enjoy, Send back. Get all the technology you love
									whenever you want. Discover RentTech
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end hashtag */}
			{/* start screen */}
			<section className="screen py-5" style={{ backgroundColor: "black", color: "white", marginBottom: "50px", marginTop: "50px" }}>
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-md-5 py-sm-3">
							<div className="section-text ">
								<p>
									<span className="text-primary fw-bold fs-3">RentTech</span>{" "}
									Find out how you can rent your favorite tech, what advantages
									it has and how we use fewer resources together.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="screen_img">
								<img
									src="/three.jpg"
									alt="screen_img"
									className="w-100"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end screen */}
			{/* start previews */}
			<div className="previews py-5" style={{ backgroundColor: "black", color: "white", marginBottom: "50px" }}>
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-md-6">
							<div className="previews_img">
								<img
									src="/four.jpg"
									alt="previews"
									className="w-100"
								/>
							</div>
						</div>
						<div className="col-md-5">
							<div className="preview_text  text-sm-center ">
								<h2 className="py-3">Our Message</h2>
								<p className="fs-5">
									All devices are protected with RentTech Care. In the event of
									damage, we cover 90% of the repair costs (50% for drones). So
									you can use tech worry-free.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end previews */}
			{/* start  footer */}
			<footer style={{ backgroundColor: "black" }} className=" py-5 ">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-md-1">
							<img src="logoabyd.svg" alt="logo"  style={{ width: "149px" }} />
						</div>
						<div className="col-md-4">
							<h2 className="text-white">Contact us </h2>
							{
								<Link className="text-decoration-none text-white">
									renttech@gmail.com
								</Link>
							}
						</div>
					</div>
				</div>
			</footer>
			{/* end  footer */}
		</>
	);
};
export default Landing;
