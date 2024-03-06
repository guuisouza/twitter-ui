import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
    // Cada objeto representa uma página da aplicação.
    // Possuí 2 propriedades obrigatórias: path(caminho) e o componente a aparecer quando a rota
    // for chamada
    // {
    //     path: '/',
    //     element: <Timeline/>
    // },
    // {
    //     path: '/status',
    //     element: <Status/>
    // },
    {
        path: "/",
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline/>
            },
            {
                path: '/status',
                element: <Status/>
            },
        ]
    }
])