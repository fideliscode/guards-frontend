import { Component, OnInit } from '@angular/core';
import { Building} from '../building.interface';
import { GuardsService} from '../guards.service';
import { Router} from '@angular/router';
import { NgForm} from "@angular/forms";

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
	building:Building;
	buildings:Building[]=[];
	onAdd:boolean=false;

  constructor(public guardsService:GuardsService,private router:Router) { 
  	this.onAdd=false;
  	this.guardsService.getBuildings()
    .subscribe(	(res)=>{this.buildings =res.buildings; });}

  ngOnInit() {
  }

  onSelect(building:Building){
  	  
    this.guardsService.setBuilding(building);
    this.router.navigate(['building']);

  }
  onAddBuilding(){
  	this.onAdd=true;
  }
  onBuildings(){
  	this.onAdd=false;
  }

  onSubmit(form: NgForm){
	this.guardsService.addBuilding(form.value.name, 
		form.value.location,form.value.size,form.value.floors, )
	.subscribe(
	(res:any)=> {alert('Building ' + res.data.name+'Registered!');
	this.router.navigate(['buildings']);
}
	);
	form.reset();
	
}

}
