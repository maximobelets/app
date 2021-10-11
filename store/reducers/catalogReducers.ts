import { CatalogActions, CatalogState, FetchCatalogActionsTypes } from "../../types/types"

const initialState: CatalogState = {
	catalog: [],
	loading: false,
	error: null
}

export const catalogReducer = (state = initialState, action: CatalogActions): CatalogState => {
	switch (action.type) {
		case FetchCatalogActionsTypes.FETCH_CATALOG:
			return {
				catalog: [],
				loading: true,
				error: null
			}
		case FetchCatalogActionsTypes.FETCH_CATALOG_SUCCESS:
			return {
				catalog: action.payload,
				loading: false,
				error: null
			}
		case FetchCatalogActionsTypes.FETCH_CATALOG_ERROR:
			return {
				catalog: [],
				loading: false,
				error: action.payload
			}
		default:
			return state
	}
}
