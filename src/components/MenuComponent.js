import React, { Component } from 'react';
import { Media } from 'reactstrap';

 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
              <Dishdetail 
              image = {dish.image}
              name = {dish.name}
              description = {dish.description} />
            );
        else
            return(
                <div></div>
            );
    }


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
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    { this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    { this.state.selectedDish  ? this.renderComments(this.state.selectedDish.comments) : null}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;