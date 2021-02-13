import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [FooterComponent, ToolbarComponent, WrapperComponent],
  exports: [FooterComponent, ToolbarComponent, WrapperComponent],
})
export class LayoutsModule { }
