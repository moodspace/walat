import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { Page, Exercise, Lesson, Asset } from './models/models';
import { AppService } from './services/services';

@Component({
  selector: 'library-view',
  templateUrl: './library.view.html'
})
export class LibraryView implements AfterViewInit {
  constructor(private service: AppService, private e: ElementRef) {
    this.service.activeView = this.service.library;
  }

  ngAfterViewInit() {
    // this.service.setBreadCrumb([], 'Media library', '');

    $('.message .close').on('click', (event) => {
      $(event.currentTarget).closest('.message').transition('fade');
    });
  }
}
