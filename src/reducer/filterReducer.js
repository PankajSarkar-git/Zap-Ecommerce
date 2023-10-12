const filterReducer = (state, action) => {
  // filter state Update
  if (action.type === "LOAD_FILTER_PRODUCTS") {
    let priceArr = action.payload.map((elem) => {
      return elem.price;
    });

    // let maxPrice = priceArr.reduce((accumulator, currentValue)=> Math.max(accumulator , currentValue),0)
    let maxPrice = Math.max(...priceArr);
    console.log(maxPrice);
    // console.log(Math.max.apply(null , priceArr));
    return {
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
      filters: {
        ...state.filters,
        maxPrice: maxPrice,
        price: maxPrice,
      },
    };
  }
  // grid
  if (action.type === "SET_GRID_VIWE") {
    return {
      ...state,
      grid_viwe: true,
    };
  }
  // list
  if (action.type === "SET_List_VIWE") {
    return {
      ...state,
      grid_viwe: false,
    };
  }

  // sort value
  if (action.type === "GET_SHORT_VALUE") {
    return {
      ...state,
      sorting_product: action.payload,
    };
  }

  // sort product

  if (action.type === "SHORTING_PRODUCTS") {
    let sortNewData;
    const { filter_products, sorting_product } = state;
    let productCopy = [...filter_products];

    const priceSort = (a, b) => {
      // if (sorting_product !== "defualt") {
      //   return a.title.localeCompare(b.title);
      // }
      if (sorting_product === "a-z") {
        return a.title.localeCompare(b.title);
      }
      if (sorting_product === "z-a") {
        return b.title.localeCompare(a.title);
      }
      if (sorting_product === "lowToHingh") {
        return a.price - b.price;
      }
      if (sorting_product === "highToLow") {
        return b.price - a.price;
      }
    };
    sortNewData = productCopy.sort(priceSort);

    return {
      ...state,
      filter_products: sortNewData,
    };
  }

  // filter scerch

  if (action.type === "UPDATE_FILTER_VALUE") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  if (action.type === "UPDATE_FILTERS_PRODUCTS") {
    const { all_products } = state;
    let copyProducts = [...all_products];
    const { text, category, price } = state.filters;
    if (text) {
      copyProducts = copyProducts.filter((curelm) => {
        return curelm.title.toLowerCase().includes(text);
      });
    }
    if (category === "All") {
      copyProducts = copyProducts
    }
    if (category) {
      if (category === "All") {
        copyProducts = copyProducts
      }else{
        copyProducts = copyProducts.filter((curelm) => {
          return curelm.category === category;
        });
      }
      
    }
    
    if (price) {
      copyProducts = copyProducts.filter((elm) => {
        return elm.price <= price;
      });
    }

    return {
      ...state,
      filter_products: copyProducts,
    };
  }

  // clear filters

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
      },
    };
  }
  return state;
};

export default filterReducer;
