import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Iimage } from './image';
import { Iramen } from './ramen';
import { RamenService } from './ramen.service';

@Component({
  selector: 'app-ramen',
  templateUrl: './ramen.component.html',
  styleUrls: ['./ramen.component.css']
})
export class RamenComponent implements OnInit {
  images: Iimage[];
  ramens: Iramen[] = [];
  allRamens: Iramen[] = [];
  filter: Iramen[] = [];
  stars: number[];
  starsWidth: any;
  searchByBrandControl = new FormControl('');
  ratingControl = new FormControl();
  subscription: Subscription;
  selectedSortValue: string;

  constructor(private ramenService: RamenService, private router: Router) {
  }

  ngOnInit(): void {
    this.ramenService.getRamenDetails('TopRamen8d30951.json').subscribe(res => {
      this.allRamens = res;
      this.ramens = res;
      this.subscription = this.searchByBrandControl.valueChanges.pipe(
        startWith(''),
        map((value: string) => value ? this._filter(value) : this.allRamens)
      ).subscribe(res => this.filter = res);
    });

    this.ramenService.getImages('noodlesec253ad.json').subscribe(res => this.images = res);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getStarWidth(noOfStars: number): number {
    return (noOfStars * 60) / 5;
  }

  private _filter(value: string): Iramen[] {
    const query = value?.toLowerCase();
    this.ramens = this.allRamens.filter(item => item.brand.toLowerCase().indexOf(query) === 0);
    return this.sortByRatings(this.selectedSortValue);
  }

  sortByRatings(value: string): Iramen[] {
    const arr = this.ramens.slice();
    if (value == '0') return arr.sort((a, b) => a.stars - b.stars);
    else if (value == '1') return arr.sort((a, b) => b.stars - a.stars);
    else return arr;
  }

  onChange(event: any): void {
    this.filter = this.sortByRatings(event.value)
  }

  selectedRamen(ramen: Iramen, i: number): void {
    ramen['image'] = this.images[i % this.images.length].image;
    this.ramenService.selectedRamen(ramen);
    this.router.navigate(['/ramenDetails', i])
  }

}
