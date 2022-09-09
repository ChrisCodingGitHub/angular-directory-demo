import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryConfigComponent } from './directory-config/directory-config.component';



@NgModule({
  declarations: [
    DirectoryConfigComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectoryConfigComponent
  ]
})
export class DirectoryConfigModule { }
