import { Routes } from '@angular/router';
import { Users } from './users/users';
import { AddUser } from './add-user/add-user';
import { Dashboard } from './dashboard/dashboard';
import { OfficeUsers } from './users/office-users/office-users';
import { UserList } from './users/user-list/user-list';
import { Districts } from './settings/districts/districts';
import { Regions } from './settings/regions/regions';
import { Settings } from './settings/settings';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
        title: "Dashboard"
    },
    {
        path: 'users',
        children: [
            {
                path: "add-user",
                component: AddUser,
                title: 'Add User'
            },
             {
                path: "office-users",
                component: OfficeUsers,
                title: "Office Users"
            },
            {
                path: "users-list",
                component: UserList,
                title: "Users List"
            },
        ]
    },
    {
        path: 'settings',
        component: Settings,
        children: [
            {
                path: '',
                redirectTo: 'regions', // default child route
                pathMatch: 'full'
            },
             {
                path: "regions",
                component: Regions,
                title: "Regions"
            },
            {
                path: "districts",
                component: Districts,
                title: "Districts"
            }
        ]
    },
    { path: "**" , component: NotFound, title: "Page Not Found"}
];
