import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { WritingComponent } from './components/writing/writing.component';
import { LearningComponent } from './components/learning/learning.component';
import { TwentyTwentyReadingListComponent } from './components/writing/twenty-twenty-reading-list/twenty-twenty-reading-list.component';
import { TwentyTwentyRunningComponent } from './components/writing/twenty-twenty-running/twenty-twenty-running.component';
import { RoanMountainHikeComponent } from './components/writing/roan-mountain-hike/roan-mountain-hike.component';
import { PandemicCocktailsComponent } from './components/writing/pandemic-cocktails/pandemic-cocktails.component';
import { TutorialsComponent } from './components/learning/tutorials/tutorials/tutorials.component';
import { HowItsMadeComponent } from './components/learning/how-its-made/how-its-made.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WritingComponent,
    LearningComponent,
    TwentyTwentyReadingListComponent,
    TwentyTwentyRunningComponent,
    RoanMountainHikeComponent,
    PandemicCocktailsComponent,
    TutorialsComponent,
    HowItsMadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
