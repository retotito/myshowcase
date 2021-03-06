import { AvatarService } from './services/avatar.service';
import { AuthGuard } from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LangwidgetComponent } from 'shared/components/langwidget/langwidget.component';
import { AuthService } from 'shared/services/auth.service';
import { CategoriesService } from 'shared/services/categories.service';
import { MobileMenuService } from 'shared/services/mobile-menu.service';
import { TodosService } from 'shared/services/todos.service';
import { AuthwidgetComponent } from 'shared/components/authwidget/authwidget.component';
import { ROUTES } from 'app/common/routes';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { DragulaModule } from 'ng2-dragula';
import { TranslateModule } from '@ngx-translate/core';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'shared/services/user.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { ApiLaguagesService } from 'shared/services/laguages.service';
import { CatfilterPipe } from './pipes/catfilter.pipe';
import { CurrentlangPipe } from './pipes/currentlang.pipe';
import { CatmodalComponent } from './components/categories/catmodal/catmodal.component';
import { CatmodalService } from 'shared/components/categories/catmodal/catmodal.service';
import { LocationssearchComponent } from './components/locationssearch/locationssearch.component';
import { LocationsService } from 'shared/services/locations.service';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(ROUTES),
    DragulaModule,
    ReactiveFormsModule
  ],
  declarations: [
    LangwidgetComponent,
    AuthwidgetComponent,
    UploadImageComponent,
    UploadImagesComponent,
    UserComponent,
    CategoriesComponent,
    CatfilterPipe,
    CurrentlangPipe,
    CatmodalComponent,
    LocationssearchComponent
  ],
  exports: [
    LangwidgetComponent,
    AuthwidgetComponent,
    UploadImageComponent,
    UploadImagesComponent,
    UserComponent,
    ReactiveFormsModule,
    CategoriesComponent,
    CatmodalComponent,
    LocationssearchComponent
  ],
  providers: [
    AuthService,
    TodosService,
    CategoriesService,
    MobileMenuService,
    AuthGuard,
    UserService,
    AvatarService,
    ApiLaguagesService,
    CatmodalService,
    LocationsService
  ]
})
export class SharedModule { }
//