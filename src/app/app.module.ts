import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { AppErrorHandler } from './error/app-error-handler';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from './course.service';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { TestngifComponent } from './testngif/testngif.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewcourseformComponent } from './newcourseform/newcourseform.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Route, RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    PanelComponent,
    TestngifComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewcourseformComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubprofileComponent,
    NotfoundComponent,
    GithubfollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '',
        component : HomeComponent
      },
      { path : 'followers/:id',
        component : GithubprofileComponent
      },
      { path : 'followers',
        component : GithubfollowersComponent
      },
      { path : 'posts',
        component : PostsComponent
      },
      { path : '**',
        component : NotfoundComponent
      }
    ])
  ],
  providers: [
    CourseService,
    PostService,
    {provide : ErrorHandler, useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
