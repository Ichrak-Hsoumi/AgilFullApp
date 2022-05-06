import { EditServicesComponent } from './../../services/edit-services/edit-services.component';
import { AddServicesComponent } from './../../services/add-services/add-services.component';
import { ViewServicesComponent } from './../../services/view-services/view-services.component';
import { ListServicesComponent } from './../../services/list-services/list-services.component';
import { EditAgentsComponent } from './../../agents/edit-agents/edit-agents.component';
import { ViewAgentsComponent } from './../../agents/view-agents/view-agents.component';
import { ListAgentsComponent } from './../../agents/list-agents/list-agents.component';
import { AddAgentsComponent } from './../../agents/add-agents/add-agents.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { RegisterComponent } from '../../register/register.component';
import { LoginComponent } from '../../login/login.component';
import { UserComponent } from '../../user/user.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ArticleListComponent } from '../../articles/article-list/article-list.component';
import { ArticleViewComponent } from '../../articles/article-view/article-view.component';
import { ArticleFormComponent } from '../../articles/article-form/article-form.component';
import { ArticleEditComponent } from '../../articles/article-edit/article-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user',           component: UserComponent },

    { path: 'agents', component: ListAgentsComponent },
    { path: 'agent/:agentId/view', component: ViewAgentsComponent },
    { path: 'addAgent', component: AddAgentsComponent },
    { path: 'agent/:agentId/edit', component: EditAgentsComponent },

    { path: 'articles', component: ArticleListComponent },
    { path: 'article/:articleId/view', component: ArticleViewComponent },
    { path: 'addArticle', component: ArticleFormComponent },
    { path: 'article/:articleId/edit', component: ArticleEditComponent },

    { path: 'services', component: ListServicesComponent },
    { path: 'service/:serviceId/view', component: ViewServicesComponent },
    { path: 'addService', component: AddServicesComponent },
    { path: 'service/:serviceId/edit', component: EditServicesComponent },

    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
