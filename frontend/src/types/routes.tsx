import type { LazyExoticComponent, ComponentType } from 'react';

export type RoutePath =
    | '/'
    | '/login'
    | '/signup'
    | '/dashboard'
    | '/rooms'
    | '/rooms/:id'
    | '/analytics'
    | '/profile'
    | '/settings'
    | '/timer';

export interface RouteConfig<P = Record<string, unknown>> {
    path: RoutePath;
    component: LazyExoticComponent<ComponentType<P>> | ComponentType<P>;
    isProtected: boolean;
    title: string;
    description?: string;
}

export interface NavigationItem {
    href: RoutePath;
    label: string;
    icon?: string;
    description?: string;
}