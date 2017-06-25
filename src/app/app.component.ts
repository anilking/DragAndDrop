import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public uploader: FileUploader = new FileUploader({ url: URL });
  public imagesUrl: any = [];

  constructor() {
  }

  ngOnInit() {

  }

  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  public onFileDrop(files: File[]) {
    for (var i = 0; i < files.length; i++) {
      this.readFile(files[i]);
    }
  }
  readFile(file: File) {
    var reader = new FileReader();
    reader.onload = () => {
      var dataURL = reader.result;
      this.imagesUrl.push(dataURL);
    };
    reader.readAsDataURL(file);
  }


}
