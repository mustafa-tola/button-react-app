import React from "react"

class Home extends React.Component {
    homePage = () => {
        const code = `<h1>This is our home page</h1>
                      <p>Here you can find any thing you want</p>
                      <p>If you have any query or want to contact to us,Please go to the contact portion</p>
                      <p>If you want to know about us,Go to about section</p>`
        return (
            document.getElementById('home').innerHTML = code
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.homePage}>Home</button>
                <div id ="home"></div>
            </div>
        )
    }
}

export default Home;