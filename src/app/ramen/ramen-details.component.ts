import { Component, OnInit } from '@angular/core';
import { Iramen } from './ramen';
import { RamenService } from './ramen.service';

@Component({
  selector: 'app-ramen-details',
  templateUrl: './ramen-details.component.html',
  styleUrls: ['./ramen.component.css']
})

export class RamenDetailsComponent implements OnInit {
  selectedRamen: Iramen;
  constructor(private ramenService: RamenService) {

  }

  ngOnInit(): void {
    this.selectedRamen = this.ramenService.getSelectedRamen();
  }
}
