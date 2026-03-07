import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [],
  templateUrl: './menu-detail.html',
  styleUrl: './menu-detail.css',
})
export class MenuDetailComponent {
  itemId!: number;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));
  }

}
