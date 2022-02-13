import React , { Component } from "react";
import { Card  } from "reactstrap";


class DishDitails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        if (this.props.data != null){
            const comment = this.props.data.comments.map( (comm) => {
                return (
                    <div key={comm.id} className="col-12 col-md-5 m-1">
                        {comm.comment}
                        {comm.author}
                        {comm.date}
                        <hr/>
                    </div>
                );
            });
            return(
                < >
                <div className="col-12 col-md-5 m-1" >
                    <Card>   
                        {this.props.details}
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h2> Comment </h2>
                    {comment}
                </div>
                </>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDitails;