import { Component, NgModule} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Run } from '../run';
import { RunService } from '../run.service';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-run-form',
  templateUrl: './run-form.component.html',
  styleUrl: './run-form.component.css'
})



export class RunFormComponent {

  run: Run;

  constructor( private route: ActivatedRoute,
      private router: Router, 
      private runService: RunService){
          this.run = new Run('','', '','','','','');
      }
  
  onSubmit() {
    this.run.username = localStorage.getItem('username') || '';
    console.log('The new run that  i save is : ' + this.run)
    this.runService.save(this.run).subscribe(result => this.gotoRunList());
  }

  gotoRunList(){
    this.router.navigate(['/runs'])
  }
}
