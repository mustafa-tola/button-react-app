import React from "react" 

class About extends React.Component {
    aboutPage = () => {
        const code = `<h1>This is our about portion</h1>
                      <p>We are the best product sellers of our country</p>
                      <p>We sell every kind of thing from food to clothes,sports items to computer games,books</p>
                      <p>You can find any ting of your choice here</p>
                      <p>Please check our products and give a review so we can do better for others</p>`;
        return (
            document.getElementById('home').innerHTML = code
        )
    };
    render() {
        return (
            <div className="home">
                <button onClick={this.aboutPage}>About</button>
            </div>
        )
    }
}

export default About;