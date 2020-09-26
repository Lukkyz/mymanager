import { connect } from "react-redux";
import ComponentsField from "../components/ComponentsField";

const mapStateToProps = (state) => ({
  components: state.components,
});

export default connect(mapStateToProps, null)(ComponentsField);
