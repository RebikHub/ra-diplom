import {
  currentCategoriesId,
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess
} from "./categoriesSlice";
import {
  fetchItemsFailure,
  fetchItemsMoreSuccess,
  fetchItemsRequest,
  fetchItemsSuccess
} from "./itemsSlice";
import {
  fetchTopSalesRequest,
  fetchTopSalesSuccess,
  fetchTopSalesFailure
} from "./topSalesSlice";

export function getTopSales() {
  return async (dispatch) => {
    dispatch(fetchTopSalesRequest());
    try {
      const response = await fetch(process.env.REACT_APP_URL_API_TOP);
      if (!response.ok) {
        console.log(response);
        throw new Error();
      }
      const data = await response.json();

      dispatch(fetchTopSalesSuccess(data));
    } catch (error) {
      dispatch(fetchTopSalesFailure(error));
    }
  };
};

export function getCategories() {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const response = await fetch(process.env.REACT_APP_URL_API_CATEGORIES);
      if (!response.ok) {
        console.log(response);
        throw new Error();
      }
      const data = await response.json();

      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};

export function getItems(id) {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    let url = '';
    if (id) {
      url = `?categoryId=${id}`;
      dispatch(currentCategoriesId(id));
    } else {
      dispatch(currentCategoriesId(null));
    }

    try {
      const response = await fetch(process.env.REACT_APP_URL_API_ITEMS + url);

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};

export function getItemsMore(id, offset) {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());

    let url = `?offset=${offset}`;
    if (id) {
      url = `?categoryId=${id}&offset=${offset}`;
    }

    try {
      const response = await fetch(process.env.REACT_APP_URL_API_ITEMS + url);

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      dispatch(fetchItemsMoreSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};