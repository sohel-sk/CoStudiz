import React, { Suspense } from 'react';
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider,
    Navigate 
} from 'react-router-dom';
import { ROUTES } from '@/config/routes';
// import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
// import { RootLayout } from '@/components/layout/RootLayout';
// import { AuthLayout } from '@/components/layout/AuthLayout';

const LoadingFallback: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
);

const createRouteElement = (routeConfig: typeof ROUTES[keyof typeof ROUTES]) => {
    const element = (
        <Suspense fallback={<LoadingFallback />}>
            <routeConfig.component />
        </Suspense>
    );

    return element
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        {/* <Route element={<AuthLayout />}>
            <Route path={ROUTES.LOGIN.path} element={createRouteElement(ROUTES.LOGIN)} />
            <Route path={ROUTES.SIGNUP.path} element={createRouteElement(ROUTES.SIGNUP)} />
        </Route>

        <Route element={<RootLayout />}>
            <Route path={ROUTES.DASHBOARD.path} element={createRouteElement(ROUTES.DASHBOARD)} />
            <Route path={ROUTES.ROOMS.path} element={createRouteElement(ROUTES.ROOMS)} />
            <Route path={ROUTES.TIMER.path} element={createRouteElement(ROUTES.TIMER)} />
        </Route> */}

        <Route path={ROUTES.HOME.path} element={createRouteElement(ROUTES.HOME)} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    )
);

export const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />;
};