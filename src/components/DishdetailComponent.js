
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component {
  renderComments(comments) {
    if (comments != null)
        return (
            <div>
                <h4> Comments </h4>
                {comments.map((item, key) =>
                <ul className="list-unstyled">
                     <li>{item.comment}</li>
                <li>-- {item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</li>
                 </ul>
                )}
               
            </div>
        );
    else  
        return (
            <div></div>
        );  
  }

  render() {
    return (
      <div className = "container">
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                  <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                  </CardBody>
              </Card>
            </div>
            <div  className="col-12 col-md-5 m-1">
              { this.props.dish.comments  ? this.renderComments(this.props.dish.comments ) : <div></div>}
            </div>
        </div>
      </div>
      
    );
  }
}

export default Dishdetail;
