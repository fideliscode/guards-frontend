import { Component, OnInit,Input } from '@angular/core';
import { Guard} from '../guard.interface';
import { Building} from '../building.interface';
import { Duty} from '../duty.interface';
import { GuardsService} from '../guards.service';
import { Router } from '@angular/router';
import { NgForm} from "@angular/forms";

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss']
})
export class GuardComponent implements OnInit {
guard:Guard;
building:Building; 
buildings:Building[]=[];
duty:Duty;
duties:Duty[]=[];
ongetduty:boolean=false;
editguard:boolean=false;
ongetGuard:boolean=true;
addDuty:boolean=false;
editname='';
editaddress='';
editage=null;
selectedBuilding='';
selectedDate='';
  constructor(public guardsService:GuardsService,private router:Router) {

   this.guard = this.guardsService.getGuard();
   if(!this.guard)this.router.navigate(['guards']);

   	this.guardsService.getGuardBuilding(this.guard.building)
    .subscribe(	(res:any)=>{this.building =res.building;});
    
    this.guardsService.getBuildings()
    .subscribe(  (res)=>{this.buildings =res.buildings; });

    this.guardsService.getGuardDuties(this.guard.id)
    .subscribe((res:any)=>{this.duties=res.duties});
    

   }

  ngOnInit() {

  }
  onGuard(){
  	this.ongetduty=false;
  	this.ongetGuard=true;
  	this.editguard=false;
  	this.addDuty=false;

  }
  onGetduties(){
  	this.ongetduty=true;
  	this.editguard=false;
  	this.addDuty=false;
  	this.ongetGuard=false;
  

  }
  onEditGuard(){
  	this.ongetGuard=true;
  	this.editguard=true;
  	this.ongetduty=false;
  	this.addDuty=false;

  	this.editname=this.guard.name;
  	this.editaddress=this.guard.address;
  	this.editage=this.guard.age;
  }
  onAddDuty(){
  	this.addDuty=true;
  	this.ongetGuard=false;
  	this.ongetduty=false;
  	this.editguard=false;
  }
  onSubmitDuty(f){

  }

}
