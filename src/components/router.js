import {createBrowserRouter} from 'react-router-dom';
import ProjectPage from './projectPage';
import EditPage from './editPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProjectPage />
    },

    {
        path: '/edit/:id?',
        element: <EditPage />,
    }
])

export default router;