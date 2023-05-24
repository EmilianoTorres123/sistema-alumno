import { Component } from '@angular/core';
import *  as QRCode from 'qrcode';
import { FormsModule } from '@angular/forms';

imports: [
  FormsModule,
]

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})

export class QRCodeComponent {
  data: any;
  qrcodeDataUrl: any;

  generateQRCode() {
    QRCode.toDataURL(this.data, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrcodeDataUrl = url;
    });
  }
}

