import Menu from "./componants/MenuComponent";
import { Navbar , NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES
    };
}
render () {
  return (
    <>
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">
          Ristorante Con Fushion
        </NavbarBrand>
      </div>

    </Navbar>
     <Menu dishes={this.state.dishes} />
    </>
  );
}
}
export default App;
