import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ShowcaseCardModule } from '../shared/components/showcase-card/showcase-card.module';
import { ShowcaseTableEventsModule } from '../shared/components/showcase-table-events/showcase-table-events.module';
import { ShowcaseTablePropertiesModule } from '../shared/components/showcase-table-properties/showcase-table-properties.module';
import { InternationalizationComponent } from './internationalization.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightJsModule,
    ShowcaseCardModule,
    ShowcaseTablePropertiesModule,
    ShowcaseTableEventsModule,
    RouterModule.forChild( [
      { path: '', component: InternationalizationComponent }
    ] )
  ],
  declarations: [ InternationalizationComponent ],
  exports: [ InternationalizationComponent ]
})
export class InternationalizationModule { }
