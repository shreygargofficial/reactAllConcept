import React, { Suspense } from "react";
import "./App.css";
import { ErrorBoundry } from "./components/ErrorBoundry";
import FunctionTest from "./components/FunctionTest";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ParamsRoute from "./components/ParamsRoute";
import ParamsRouteClass from "./components/ParamsRouteClass";
import RootComponent from "./components/RootComponent";
import { ClassTest } from "./components/ClassTest";
import { lazy } from "react";
import Spinner from "./components/Spinner";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { myCombineReducers } from "./Reducer/CombineReducer";
import { ContextProvider } from "./components/Context/ContextProvider";
import { mySlice } from "./Slice/CombineSlice";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import OldPost from "./components/OldPost";
import HookFormExample from "./components/HookFormExample";
const MyLazyComponent = lazy(() => import("./components/LazyLoadMe"));

// const store = configureStore({ reducer: myCombineReducers });
const store = configureStore({ reducer: mySlice });

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Provider store={store}>
          <ContextProvider>
            <BrowserRouter>
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path="/" element={<RootComponent />} />
                  <Route
                    path="/class"
                    element={<ClassTest myColor={"green"} />}
                  />
                  <Route path="/form" element={<HookFormExample/>}/>
                  <Route path="/function" element={<FunctionTest />} />
                  <Route
                    path="/function/products/:id"
                    element={<ParamsRoute />}
                  />
                  <Route
                    path="/classParams/:name"
                    element={<ParamsRouteClass surname="garg" />}
                  />

                  <Route path="/lazy" element={<MyLazyComponent />} />
                  <Route path = '/nestedpost' element={<Post/>}>
                    <Route path="new" element={<NewPost/>}/>
                    <Route path="old" element={<OldPost/>}/>
                    
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ContextProvider>
        </Provider>
      </ErrorBoundry>
    </div>
  );
}

export default App;
