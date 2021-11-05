import { CatalogActions, CatalogState, CatalogActionsTypes } from "../../types/catalogReducer"

const initialState: CatalogState = {
	catalog: [],
	loading: false,
	error: null
}

export const catalogReducer = (state = initialState, action: CatalogActions): CatalogState => {
	switch (action.type) {
		case CatalogActionsTypes.FETCH_CATALOG:
			return {
				catalog: [],
				loading: true,
				error: null
			}
		case CatalogActionsTypes.FETCH_CATALOG_SUCCESS:
			return {
				catalog: action.payload,
				loading: false,
				error: null
			}
		case CatalogActionsTypes.DELETE_CATALOG_ITEM:
			return {
				catalog: [...state.catalog.filter(item => item.title !== action.payload)],
				loading: false,
				error: null
			}
		case CatalogActionsTypes.ADD_CATALOG_ITEM:
			return {
				catalog: [...state.catalog, action.payload],
				loading: false,
				error: null
			}
		case CatalogActionsTypes.FETCH_CATALOG_ERROR:
			return {
				catalog: [],
				loading: false,
				error: action.payload
			}
		default:
			return state
	}
}
