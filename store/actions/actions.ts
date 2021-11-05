import { Dispatch } from "redux";
import { DeleteCatalogItem, fetchCatalog, fetchCatalogError, fetchCatalogSuccsess } from "./actionCreators";

export const requestData = () => async (dispatch: Dispatch) => {
	try {
		dispatch(fetchCatalog());

		const data = await fetch('https://fakestoreapi.com/products').then((response) => response.json());
		dispatch(fetchCatalogSuccsess(data));
	}

	catch (error) {
		dispatch(fetchCatalogError(error));
	}
}

export const deleteCatalogItem = (item) => (dispatch: Dispatch) => {
	dispatch(DeleteCatalogItem(item))
}
