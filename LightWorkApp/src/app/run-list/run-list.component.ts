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
  username: string ;

  constructor(private runService: RunService){
    this.runs = [];
    this.username = ''
  }

  ngOnInit() {  
    this.username =localStorage.getItem('username') || '';
    if (this.username != ''){
      this.runService.findAll(this.username).subscribe(data => {
            this.runs = data;
          })
    }




  }
}
