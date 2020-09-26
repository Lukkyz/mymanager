import { connect } from "react-redux";
import { addComponent } from "../actions/componentAction";
import Add from "../components/Add";

const mapDispatchToProps = (dispatch) => ({
  add: (obj) => dispatch(addComponent(obj)),
});

export default connect(null, mapDispatchToProps)(Add);
