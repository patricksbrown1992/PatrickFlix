import { connect } from "react-redux";
import HiddenRowForm from "./hiddenRowform";
import { receiveModal, clearModal } from "../../actions/modalActions";

const msp = (state) => ({
  errors: state.errors,
  videos: Object.values(state.entities.videos),
  modal: state.modal,
  user: state.session.id,
});

const mdp = (dispatch) => ({
  receiveModal: (id) => dispatch(receiveModal(id)),
  clearModal: () => dispatch(clearModal()),
});

export default connect(msp, mdp)(HiddenRowForm);
