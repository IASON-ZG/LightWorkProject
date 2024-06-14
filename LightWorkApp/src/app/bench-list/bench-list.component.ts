import { Component } from '@angular/core';
import { Bench } from '../bench';
import { BenchService } from '../bench.service';

@Component({
  selector: 'app-bench-list',
  templateUrl: './bench-list.component.html',
  styleUrl: './bench-list.component.css'
})
export class BenchListComponent {
  benches: Bench[];

  constructor(private benchService: BenchService){
    this.benches = [];
  }

  ngOnInit() {
    this.benchService.findAll().subscribe(data => {
      this.benches = data;
    })
  }
}
