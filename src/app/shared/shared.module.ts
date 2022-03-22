import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibrariesModule } from './libraries/libraries.module';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [...MODULES, LibrariesModule],
  exports: [...MODULES, LibrariesModule],
})
export class SharedModule {}