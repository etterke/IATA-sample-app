import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { NavigationComponent } from './presentation/navigation/navigation.component';
import { SidebarComponent } from './presentation/sidebar/sidebar.component';
import { ContentComponent } from './presentation/content/content.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'navigation', component: NavigationComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path: 'content', component: ContentComponent}
];
