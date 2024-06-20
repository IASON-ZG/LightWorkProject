import { Component, NgModule} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bench } from '../bench';
import { BenchService } from '../bench.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-bench-form',
  templateUrl: './bench-form.component.html',
  styleUrl: './bench-form.component.css'
})
export class BenchFormComponent {
    bench : Bench;
    username: String = '';

    constructor( private route: ActivatedRoute,
      private router: Router, 
      private benchService: BenchService){
          this.bench = new Bench('','', '','','');
          this.username = localStorage.getItem('username') || ''
      }

      onSubmit() {
        this.bench.username = localStorage.getItem('username') || '';
        console.log('The new bench that  i save is : ' + this.bench)
        this.benchService.save(this.bench).subscribe(result => this.gotobenchList());
      }
    
      gotobenchList(){
        this.router.navigate(['/benches'])
      }  
}
