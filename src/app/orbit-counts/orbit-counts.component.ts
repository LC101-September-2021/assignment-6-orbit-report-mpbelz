import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];
	
  constructor() { }

  ngOnInit() {
  }


  countByType (typeName: string ): number {
    let count = [];
	typeName = typeName.toLowerCase();
    for (let i = 0; i < this.satellites.length; i++){
      if (this.satellites[i].type.toLowerCase() === typeName) {
        count.push(this.satellites[i].name);
      }
      }
      return count.length;
    }
  }
