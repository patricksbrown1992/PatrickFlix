import { connect } from "react-redux";
import NavForm from "./navForm";
import { logout } from "../../actions/sessionActions";
import { withRouter } from "react-router-dom";

import { receiveModal } from "../../actions/modalActions";

const msp = (state) => {
  return {
    errors: state.errors,
    videos: state.entities.videos,
    user: state.entities.user[state.session.id],
    lists: Object.values(state.entities.lists),
  };
};

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveModal: (id) => dispatch(receiveModal(id)),
});

export default withRouter(connect(msp, mdp)(NavForm));
