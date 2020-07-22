import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import bands from "./bands";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    bands,
});
