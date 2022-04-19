import {
  fetchCategoriesSuccess,
  fetchFailure,
  fetchRequest,
  fetchTopSalesSuccess,
  fetchItemsSuccess
} from "./listSlices";

export function getTopSales() {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await fetch(process.env.REACT_APP_URL_API_TOP);
      if (!response.ok) {
        console.log(response);
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      dispatch(fetchTopSalesSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};

export function getCategories() {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await fetch(process.env.REACT_APP_URL_API_CATEGORIES);
      if (!response.ok) {
        console.log(response);
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};

export function getItems() {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await fetch(process.env.REACT_APP_URL_API_ITEMS);
      if (!response.ok) {
        console.log(response);
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};