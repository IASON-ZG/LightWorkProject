import { Component, OnInit } from '@angular/core';
import { Run } from '../run';
import { RunService } from '../run.service';

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrl: './run-list.component.css'
})

export class RunListComponent implements OnInit {
  runs: Run[];

  constructor(private runService: RunService){
    this.runs = [];
  }

  ngOnInit() {
    this.runService.findAll().subscribe(data => {
      this.runs = data;
    })
  }
}
