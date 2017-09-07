import { CREATE_BUDGET } from '../actions/UserDataActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case CREATE_BUDGET:
      return action.payload.val();
  }
}
