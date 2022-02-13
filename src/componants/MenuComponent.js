import React , { Component } from "react";
import { Card , CardBody , CardImg , CardImgOverlay , CardText , CardTitle } from "reactstrap";
import DishDitails from "./dishDetails";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish : dish})
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={ ()=> this.onDishSelect(dish)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="row">
                {menu}
                <DishDitails details={this.renderDish(this.state.selectedDish)} data={this.state.selectedDish} />
            </div>
    
        );
    }
}

export default Menu;