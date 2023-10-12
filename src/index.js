import ReactDom from "react-dom/client"
import  App, { router } from "./App";
import appSotre from "./utills/appStore"
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { AppProvider } from "./contex/productContex";
import { FilterContextProvider } from "./contex/filterContext";
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <AppProvider >
  <FilterContextProvider>
  <Provider store={appSotre}>
  <App/>
  </Provider>
  </FilterContextProvider>
  </AppProvider>
);

