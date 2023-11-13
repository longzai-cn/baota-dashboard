import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { HoxRoot } from "hox";
import { ConfigProvider } from "antd";
import { cyan } from "@ant-design/colors";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: cyan.primary,
          },
        }}
      >
        <HoxRoot>
          <RouterProvider router={router} />
        </HoxRoot>
      </ConfigProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
