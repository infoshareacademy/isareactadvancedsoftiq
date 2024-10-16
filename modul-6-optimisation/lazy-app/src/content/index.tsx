import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageWrapper } from "../common/page-wrapper";
import { CircularProgress } from "@mui/material";

const LazyHome = lazy(() =>
  import("./home").then((module) => ({ default: module.Home }))
);
const LazyMenu = lazy(() =>
  import("./menu").then((module) => ({ default: module.Menu }))
);
const LazyDetails = lazy(() =>
  import("./details").then((module) => ({ default: module.Details }))
);
const LazyAdmin = lazy(() =>
  import("./admin").then((module) => ({ default: module.Admin }))
);

export const Content = () => (
  <Suspense
    fallback={
      <PageWrapper>
        <CircularProgress />
      </PageWrapper>
    }
  >
    <Routes>
      <Route path="/" element={<LazyHome />} />
      <Route path="/menu" element={<LazyMenu />} />
      <Route path="/menu/:id" element={<LazyDetails />} />
      <Route path="/admin" element={<LazyAdmin />} />
    </Routes>
  </Suspense>
);
