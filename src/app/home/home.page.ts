import { Platform } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/File/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private platform: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private ft: FileTransfer,
    private document: DocumentViewer) { }

  openLocalPdf() {
    const filePath = this.file.applicationDirectory + 'www/assets';

    if (this.platform.is("android")) {
      const newName = Date.now();
      this.file.copyFile(filePath, 'MDB.pdf', this.file.dataDirectory, `${newName}.pdf`).then(res => {
        this.fileOpener.open(res.nativeURL, 'application/pdf');
      });

    } else {
      const options: DocumentViewerOptions = {
        title: "Himan PDF"
      };
      this.document.viewDocument(`${filePath}/MDB.pdf`, 'application/pdf', options);
    }
  }


  downloadAndOpenLocalPdf() {
    const downloadURL = "https://devdactic.com/html/5-simple-hacks-LBT.pdf"
    const path = this.file.dataDirectory;
    const transfer = this.ft.create();

    transfer.download(downloadURL, `${path}myfile.pdf`).then(entry => {
      const url = entry.toURL();
      if (this.platform.is("ios")) {
        this.document.viewDocument(url, 'application/pdf', {});
      } else {
        this.fileOpener.open(url, 'application/pdf');
      }
    });
  }
}
