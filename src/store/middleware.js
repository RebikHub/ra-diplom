import {
  currentCategoriesId,
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess
} from "./categoriesSlice";
import {
  fetchItemsFailure,
  fetchItemsMoreEmpty,
  fetchItemsMoreSuccess,
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemSuccess,
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
      console.log('get items');
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};

export function getItemsMore(id, offset) {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());

    let url = '';
    if (id && offset) {
      url = `?categoryId=${id}&offset=${offset}`;
    } else if (offset) {
      url = `?offset=${offset}`;
    }

    try {
      const response = await fetch(process.env.REACT_APP_URL_API_ITEMS + url);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      
      if (data.length > 0) {
        dispatch(fetchItemsMoreSuccess(data));
      } else {
        dispatch(fetchItemsMoreEmpty());
      }

    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};

export function getSearch(text) {
  return async (dispatch) => {

    dispatch(fetchItemsRequest());
    let url = `?q=${text}`;
    try {
      const response = await fetch(process.env.REACT_APP_URL_API_ITEMS + url);

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log('get submit');
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};

export function getOrderItem(id) {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
      const response = await fetch(`${process.env.REACT_APP_URL_API_ITEMS}/${id}`);

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      dispatch(fetchItemSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};