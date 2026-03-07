import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public cartService: CartService,
    private router: Router,
    private snackBar:MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {

    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      payment: ['cash', Validators.required]
    });

  }

  placeOrder(){

  if(this.orderForm.valid){

    this.cartService.items = [];

    this.dialog.open(OrderDialogComponent);

    this.router.navigate(['/success']);

  }

}

}




  
