
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}){
  if (dish != null)
    return(
      <div  className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>);
  else
    return(
        <div></div>
        );
}

function RenderComments({comments}) {
  if (comments != null)
      return (
          <div className="col-12 col-md-5 m-1">
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

 const Dishdetail = (props) =>{
  return (
    <div className = "container">
      <div className="row">
            { props.dish  ?<RenderDish dish = {props.dish}/> : <div></div>}
            { props.dish.comments  ? <RenderComments comments = {props.dish.comments}/> : <div></div>}
          </div>
      </div>
    
  );

 }
    

export default Dishdetail;
