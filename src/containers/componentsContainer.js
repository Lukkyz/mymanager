import { connect } from "react-redux";
import ComponentsField from "../components/ComponentsField";
import { removeComponent } from "../actions/componentAction";

const mapStateToProps = (state) => ({
  components: state.components,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeComponent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsField);
