export interface CatalogState {
	catalog: any[],
	loading: boolean,
	error: null | string
}

export enum FetchCatalogActionsTypes {
	FETCH_CATALOG = 'FETCH_CATALOG',
	FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS',
	FETCH_CATALOG_ERROR = 'FETCH_CATALOG_ERROR'
}

export interface FetchCatalogAction {
	type: FetchCatalogActionsTypes.FETCH_CATALOG,
}

export interface FetchCatalogSuccsessAction {
	type: FetchCatalogActionsTypes.FETCH_CATALOG_SUCCESS,
	payload?: [] 
}

export interface FetchCatalogErrorAction {
	type: FetchCatalogActionsTypes.FETCH_CATALOG_ERROR,
	payload?: string 
}

export type CatalogActions = FetchCatalogAction | FetchCatalogSuccsessAction | FetchCatalogErrorAction;

