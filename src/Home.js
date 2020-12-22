import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/meet/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/meet/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
								
				<div>
					<h1 style={{ fontSize: "45px" }}>Logyc Meet</h1>
					<p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your friends. Unlimited Users, Screen Share, Meet Chat and more. All For Free.</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="Meet Name or ID" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
                                        <p style={{ margin: 0, fontSize: "10px", paddingRight: "50px" }}>Keep the Meet ID/Name something difficult so others cant join, else leave it we will give it a name</p>
				</div>
			</div>
		)
	}
}

export default Home;
