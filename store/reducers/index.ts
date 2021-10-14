import { catalogReducer } from './catalogReducers';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	catalog: catalogReducer
});

export type RootState = ReturnType<typeof rootReducer>;
