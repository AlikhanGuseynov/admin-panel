import {Component, OnInit} from '@angular/core';
import {FileUploadService} from '../services/file-upload.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
  fileUploads: any[];
  loading = false;

  constructor(private uploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      console.log(this.fileUploads);
      this.loading = false;
    });
  }
}
