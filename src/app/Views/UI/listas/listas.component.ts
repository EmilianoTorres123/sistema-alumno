import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from "@techiediaries/ngx-qrcode";
import { Component, OnInit } from '@angular/core';
import {faAt,faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class AppComponent {
  title ='qr-code';
  faAt= faAt;
  faPhoneAlt = faPhoneAlt;
  url='https://myevents.com/';
  profile= 'routeTomyProfile';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = this.url + this.profile;


  

}
