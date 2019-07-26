import { Component, OnInit,Input} from '@angular/core';
import { Guard} from '../guard.interface';
import { GuardsService} from '../guards.service';
import { Router} from '@angular/router';
import { Building} from '../building.interface';
import { NgForm} from "@angular/forms";

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.scss']
})
export class GuardsComponent implements OnInit {

guard:Guard;
guards:Guard[]=[];
addGuard:boolean=false;
viewGuards:boolean=true;
active1:string='active';
active2:string='';
selectedBuilding='';
buildings:Building[]=[];
building:Building;




 constructor(public guardsService:GuardsService, private router:Router) { 
  	this.guardsService.getGuards()
    .subscribe(	(res)=>{this.guards =res.guards; });
    this.addGuard = false;
    this.viewGuards=true;
  }
  

  onSelect(guard:Guard){
    console.log(guard);
    this.guardsService.setGuard(guard);
    this.router.navigate(['guard']);
  }

  ngOnInit() {
  }
  onAddguard(){
    this.active1='';
    this.active1='active';
    this.addGuard=true;
    this.viewGuards=false;
    this.guardsService.getBuildings()
    .subscribe(  (res)=>{this.buildings =res.buildings; });}
  

   onGuards(){
     this.active1='active';
     this.active2='';
    this.addGuard=false;
    this.viewGuards=true;
  }

   onSubmit(form: NgForm){
  this.guardsService.addGuard(form.value.name, 
    form.value.address,form.value.age,this.selectedBuilding )
  .subscribe(
  (res:any)=> {alert('Guard Registered!');
  this.router.navigate(['guards']);
}
  );
  form.reset();
  this.selectedBuilding='';
  
}


}
