import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
    // Cada objeto representa uma página da aplicação.
    // Possuí 2 propriedades obrigatórias: path(caminho) e o componente a aparecer quando a rota
    // for chamada
    {
        path: '/',
        element: <Timeline/>
    },
    {
        path: '/tweet',
        element: <h1>Tweet</h1>
    },
])