import { connect } from "react-redux";
import MyListItemForm from "./myListItemForm";
import { receiveModal, clearModal } from "../../actions/modalActions";
import { createList, deleteList, getLists } from "../../actions/listActions";

const msp = (state) => ({
  errors: state.errors,
  videos: state.entities.videos,
  modal: state.modal,
  user: state.entities.user[state.session.id],
  lists: state.entities.lists,
});

const mdp = (dispatch) => ({
  receiveModal: (id) => dispatch(receiveModal(id)),
  clearModal: () => dispatch(clearModal()),
  createList: (list) => dispatch(createList(list)),
  deleteList: (list) => dispatch(deleteList(list)),
  getLists: (user) => dispatch(getLists(user)),
});

export default connect(msp, mdp)(MyListItemForm);
