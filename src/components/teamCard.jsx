import React from "react";
import Card from "react-bootstrap/Card";



export default class TeamMemebers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.member.name,
            title: props.member.title,
            picture: props.member.picture,
            bio: props.member.bio
        }
    };
    render() {
        return (
          <Card style={{width: "350px"}} className="team-card">
            <div className="cardBox">
              <Card.Img
                variant="top"
                className="cardImg"
                src={this.state.picture}
                width="200"
                alt={this.state.name}
                    />              <Card.Title className="card-title">
                {this.state.name}
              </Card.Title>
                    <Card.Text className="cardText">{this.state.title}</Card.Text>
              <Card.Text className="cardText">{this.state.bio}</Card.Text>
              
            </div>



          </Card>
        );
    }
}