import { combineReducers } from "redux";
import todo from "./todo";
import alert from './alert'
// import alert from "./alert";
// import auth from "./auth";
// import profile from "./profile";
// import post from "./post";

export default combineReducers({
  todo,
  alert,
});