/*
 MIT License

 Copyright (c) 2018 Temainfo Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { Component, OnInit, ViewChild } from '@angular/core';

import * as json from './autocompletedemo-dataproperties.json';
import * as jsonEvt from './autocompletedemo-events.json';
import { DumpDataService } from '../../shared/services/dumpdata';
import { TlAutoComplete } from '../../../../projects/truly-ui/src/components/autocomplete/autocomplete';
import { HttpClient } from '@angular/common/http';
import { PersonService } from './http.service';

@Component( {
  selector: 'app-autocomplete',
  templateUrl: './autocompletedemo.component.html',
  styleUrls: [ './autocompletedemo.component.scss' ],
  providers: [ DumpDataService ]
} )
export class AutoCompleteDemoComponent implements OnInit {

  public dataTableProperties;

  public dataEvents;

  public dataLazy;

  public dataBasic;

  public timeout;

  public take = 70;

  public formOptions1;

  public result;

  public result2;

  public example = '{{item.firstName}}';

  @ViewChild( TlAutoComplete ) autocomplete;

  constructor( public dataDumpService: DumpDataService, private personService: PersonService ) {
    this.dataTableProperties = json.dataProperties;
    this.dataEvents = jsonEvt.events;
    this.dataBasic = this.dataDumpService.createRandomData( 1000 );

    this.formOptions1 = {
      title: 'New Client',
      icon: 'ion-person-add',
      draggable: true,
      width: '500px',
      height: '500px',
      maximizable: true,
      minimizable: true,
      fullscreen: false
    };

  }

  ngOnInit() {
    const data = [];
    this.dataLazy = {
      'data': data,
      'total': 100
    };
  }

  onLazyLoad( event ) {
    const inputValue = event['filters']['fields']['name']['value'];
    this.personService.getCategories(inputValue).subscribe((data) => {
      this.dataLazy = {
        'data': data['location_suggestions'],
        'total': data['location_suggestions'].length
      };
    });
  }

}
