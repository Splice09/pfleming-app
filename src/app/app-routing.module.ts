import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';
import { WritingComponent } from './components/writing/writing.component';
import { HomeComponent } from './components/home/home.component';
import { LearningComponent } from './components/learning/learning.component';

@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    const possibleSeparators = /[?;#]/;
    const indexOfSeparator = url.search(possibleSeparators);
    let processedUrl: string;

    if (indexOfSeparator > -1) {
      const separator = url.charAt(indexOfSeparator);
      const urlParts = AppRoutingModule.splitInTwo(url, separator);
      urlParts.firstPart = urlParts.firstPart.toLowerCase();

      processedUrl = urlParts.firstPart + separator + urlParts.secondPart;
    } else {
      processedUrl = url.toLowerCase();
    }

    return super.parse(processedUrl);
  }
}

const routes: Routes = [
  { path: '', 
    component: HomeComponent, 
    data: { title: 'Home Page' } 
  },
  {
    path: 'writing',
    component: WritingComponent,
    data: { title: 'Writing'}
  },
  {
    path: 'learning',
    component: LearningComponent,
    data: { title: 'Learning'}
  },
  {
    path: 'learning/how-its-made',
    component: LearningComponent,
    data: { 
      title: 'Learning',
      filePath: '../../../assets/markdown/how-its-made.md'
    }
  },
  {
    path: 'learning/tutorials',
    component: LearningComponent,
    data: { 
      title: 'Learning',
      filePath: '../../../assets/markdown/tutorials/intro-tutorial.md'
    }
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    declarations: [],
    providers: [{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer }]
})
export class AppRoutingModule { 
  public static splitInTwo(text: string, separator: string): { firstPart: string, secondPart: string } {
    const separatorIndex = text.indexOf(separator);

    if (separatorIndex == -1) {
      return { firstPart: text, secondPart: null };
    }

    const part1 = text.substr(0, separatorIndex).trim();
    const part2 = text.substr(separatorIndex + 1).trim();

    return { firstPart: part1, secondPart: part2 };
  }
}

