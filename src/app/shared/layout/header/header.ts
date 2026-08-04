import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header,',
  imports: [MatButtonModule,RouterLink,MatIconModule,MatToolbarModule,UpperCasePipe ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Mini box são Francisco'
}
