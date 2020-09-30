import { connect } from "react-redux";
import Widget from "../components/Widget";
import { removeComponent } from "../actions/componentAction";

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeComponent(id)),
});

export default connect(null, mapDispatchToProps)(Widget);
