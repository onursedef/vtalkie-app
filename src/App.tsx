import {createRouter, RouterProvider} from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen.ts";
import "./App.css";

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
