import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { StatusComponent } from './components/status/status.component';

const modules = [
    CommonModule,
    ReactiveFormsModule
];

const components = [
    SearchComponent,
    ResultsComponent,
    StatusComponent
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
