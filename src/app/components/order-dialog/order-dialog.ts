import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './order-dialog.html'
})
export class OrderDialogComponent {}
