import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./Context/Context.jsx";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SinglePost from "./Components/SinglePost.jsx";
import FetchApi from "./Components/FetchApi.jsx";
import Axios_Fetch from "./Components/Axios_Fetch.jsx";
import Fetch_RQ from "./Components/Fetch_RQ.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SingleRQ } from "./Components/SingleRQ.jsx";
import { Test } from "./Components/Test.jsx";

const queryClient= new QueryClient();

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<App />} />
      <Route path="fetch_Api" element={<FetchApi />} />
      <Route path="Axios_Api" element={<Axios_Fetch />} />
      <Route path="posts/:Id" element={<SinglePost />} />
      <Route path="Fetch_RQ" element={<Fetch_RQ />} />
      <Route path="Fetch_RQ/post/:Id" element={<SingleRQ/>}/>
      <Route path="Test" element={<Test/>}/>

    </>
  )
);

createRoot(document.getElementById("root")).render(
  
    <QueryClientProvider client={queryClient}>
      <Context>
        <RouterProvider router={router}></RouterProvider>
      </Context>
    </QueryClientProvider>

);
