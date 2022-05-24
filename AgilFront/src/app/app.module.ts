import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleViewComponent } from './articles/article-view/article-view.component';
import { ListAgentsComponent } from './agents/list-agents/list-agents.component';
import { AddAgentsComponent } from './agents/add-agents/add-agents.component';
import { EditAgentsComponent } from './agents/edit-agents/edit-agents.component';
import { ViewAgentsComponent } from './agents/view-agents/view-agents.component';
import { ListServicesComponent } from './services/list-services/list-services.component';
import { AddServicesComponent } from './services/add-services/add-services.component';
import { EditServicesComponent } from './services/edit-services/edit-services.component';
import { ViewServicesComponent } from './services/view-services/view-services.component';
import { AddGuichetComponent } from './icons/add-guichet/add-guichet.component';
import { EditGuichetComponent } from './icons/edit-guichet/edit-guichet.component';
import { ViewGuichetComponent } from './icons/view-guichet/view-guichet.component';
import { ListGuichetComponent } from './icons/list-guichet/list-guichet.component';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ArticleEditComponent,
    ArticleFormComponent,
    ArticleListComponent,
    ArticleViewComponent,
    ListAgentsComponent,
    AddAgentsComponent,
    EditAgentsComponent,
    ViewAgentsComponent,
    ListServicesComponent,
    AddServicesComponent,
    EditServicesComponent,
    ViewServicesComponent,
    AddGuichetComponent,
    EditGuichetComponent,
    ViewGuichetComponent,
    ListGuichetComponent,
    QueueComponent
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
