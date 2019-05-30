import React from "react"

class Contact extends React.Component {
    contactPage = () => {
        const code = `<h1>This is our contact form</h1>
                      <p>You can write to us about your experience in this website or your complaints here</p> 
                      <label>Name: <input type="text"></label><br /><br />
                      <label>Email: <input type="email"></label><br /><br />
                      <label>Your query: <textarea placeholder="Enter your query here"></textarea>
                     `;
        return (
            document.getElementById('home').innerHTML = code
        )
    };
    render() {
        return (
            <div>
                <button onClick={this.contactPage}>Contact</button>
            </div>    
                )
            }
        }
        
export default Contact;