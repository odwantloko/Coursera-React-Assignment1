
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component {
  render() {
    return (
    //   <div className="row">
    //   <div  className="col-12 col-md-5 m-1">
    //     {this.renderDish(this.state.selectedDish)}
    //   </div>
    // </div>
          <Card>
            <CardImg top src={this.props.image} alt={this.props.name} />
            <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>{this.props.description}</CardText>
            </CardBody>
        </Card>
      //  </div>
    );
  }
}

export default Dishdetail;
