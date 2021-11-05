export interface CatalogState {
	catalog: any[],
	loading: boolean,
	error: null | string
}

export enum CatalogActionsTypes {
	FETCH_CATALOG = 'FETCH_CATALOG',
	FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS',
	FETCH_CATALOG_ERROR = 'FETCH_CATALOG_ERROR',
	DELETE_CATALOG_ITEM = 'DELETE_CATALOG_ITEM',
	ADD_CATALOG_ITEM = 'ADD_CATALOG_ITEM',
}

export interface FetchCatalogAction {
	type: CatalogActionsTypes.FETCH_CATALOG,
}

export interface FetchCatalogSuccsessAction {
	type: CatalogActionsTypes.FETCH_CATALOG_SUCCESS,
	payload?: []
}

export interface FetchCatalogErrorAction {
	type: CatalogActionsTypes.FETCH_CATALOG_ERROR,
	payload?: string 
}

export interface DeleteCatalogItem {
	type: CatalogActionsTypes.DELETE_CATALOG_ITEM,
	payload?: []
}

export interface AddCatalogItem {
	type: CatalogActionsTypes.ADD_CATALOG_ITEM,
	payload?: {}
}

export type CatalogActions = FetchCatalogAction | FetchCatalogSuccsessAction | FetchCatalogErrorAction | DeleteCatalogItem | AddCatalogItem;

