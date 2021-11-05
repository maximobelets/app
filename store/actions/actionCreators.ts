import { CatalogActionsTypes } from "../../types/catalogReducer"

export const fetchCatalog = () => ({
	type: CatalogActionsTypes.FETCH_CATALOG
});

export const fetchCatalogSuccsess = (data) => ({
	type: CatalogActionsTypes.FETCH_CATALOG_SUCCESS,
	payload: data,
});

export const fetchCatalogError = (error) => ({
	type: CatalogActionsTypes.FETCH_CATALOG_ERROR,
	payload: error,
});

export const DeleteCatalogItem = (data) => ({
	type: CatalogActionsTypes.DELETE_CATALOG_ITEM,
	payload: data,
})

export const AddCatalogItem = (data) => ({
	type: CatalogActionsTypes.ADD_CATALOG_ITEM,
	payload: data,
})
