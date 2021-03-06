import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { AppService } from '../../services/services';

@Component({
  selector: 'wat-asset-manager',
  templateUrl: 'index.html'
})
export class AssetManager implements AfterViewInit {
  _ = _;
  filesize = filesize;

  constructor(private service: AppService, private e: ElementRef) {
  }

  ngAfterViewInit() {
    $(this.e.nativeElement).find('.dropdown').dropdown();
    const uploaders = [
      {
        multiple: true,
        input: $('input[name="file-upload"]'),
        trigger: $(this.e.nativeElement).find('.sound-add'),
        label: undefined,
        submit: undefined, /* submits immediately */
        onSubmit: () => {
          this.service.showDimmer();
        },
        type: $('input[name="file-type"]'),
        tvalue: () => 'sound',
        path: $('input[name="file-path"]'),
        pvalue: this.service.getPath,
        callback: (a) => {
          this.service.showMessage('success', `${_.map(a, 'name').join(', ')} successfully uploaded.`);
          this.service.hideDimmer();
          _.map(a, 'id').forEach(aid => this.service.initAsset(aid));
        }
      },
      {
        multiple: true,
        input: $('input[name="file-upload"]'),
        trigger: $(this.e.nativeElement).find('.image-add'),
        label: undefined,
        submit: undefined, /* submits immediately */
        onSubmit: () => {
          this.service.showDimmer();
        },
        type: $('input[name="file-type"]'),
        tvalue: () => 'image',
        path: $('input[name="file-path"]'),
        pvalue: this.service.getPath,
        callback: (a) => {
          this.service.showMessage('success', `${_.map(a, 'name').join(', ')} successfully uploaded.`);
          this.service.hideDimmer();
          _.map(a, 'id').forEach(aid => this.service.initAsset(aid));
        }
      },
      {
        multiple: true,
        input: $('input[name="file-upload"]'),
        trigger: $(this.e.nativeElement).find('.video-add'),
        label: undefined,
        submit: undefined, /* submits immediately */
        onSubmit: () => {
          this.service.showDimmer();
        },
        type: $('input[name="file-type"]'),
        tvalue: () => 'video',
        path: $('input[name="file-path"]'),
        pvalue: this.service.getPath,
        callback: (a) => {
          this.service.showMessage('success', `${_.map(a, 'name').join(', ')} successfully uploaded.`);
          this.service.hideDimmer();
          _.map(a, 'id').forEach(aid => this.service.initAsset(aid));
        }
      }
    ];

    this.service.bindUploaders(uploaders);
  }

  getAssets = () => {
    let assets = _.filter(
      _.values(this.service.assets), (a) => a.path.startsWith(this.service.getPath())
    );
    return assets;
  }
}
