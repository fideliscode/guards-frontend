import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map,tap} from 'rxjs/operators';
import { Guard} from './guard.interface';
import { Building} from './building.interface';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardsService {
	guard:Guard;
  building:Building;

  constructor(private http: HttpClient, private router:Router) { }
  	getApi(){
  		return 'http://127.0.0.1:8000/routes';
  	}


  	getGuards(){
  		const api = this.getApi() +'/guards/read.php';
  		return this.http.get(api).pipe(map((res: any)=>{return res;}));

  	}

  	setGuard(guard:Guard){
  		    this.guard=null;
  			this.guard = guard;
  		
  	}
  	getGuard(){

  		return this.guard;
  	}
  	
    getGuardBuilding(buildingId:string){
  		const api = this.getApi() +'/buildings/read_one.php?id=' + buildingId;
  		return this.http.get(api).pipe(map((res:any)=>{
  			
  			return res;}));

  	}

    

    getGuardDuties(guardId:string){
      const api = this.getApi() +'/duties/readGuardDuties.php?id=' + guardId;
    
      return this.http.get(api).pipe(map((res:any)=>{
       
        return res;}));

    }
    getBuildings(){
      const api = this.getApi() +'/buildings/read.php';
    
      return this.http.get(api).pipe(map((res:any)=>{
       
        return res;}));

    }
     setBuilding(building:Building){
          this.building=null;
        this.building = building;
      
    }
    addBuilding(name:string, location:string,size:number,floors:number){
       const body = JSON.stringify({name,location,size,floors});
       console.log(body);
       const api = this.getApi() +'/buildings/create.php';
       return this.http.post(api,body, {headers :new HttpHeaders({'Content-Type': 'application/json', 
       'X-Requested-With': 'XMLHttpRequest'})})
       .pipe(
         map((res:any)=>{return res}));
    }
    addGuard(name:string,address:string,age:number,building:string ){
        const body = JSON.stringify({name,address,age,building});
       console.log(body);
       const api = this.getApi() +'/guards/create.php';
       return this.http.post(api,body, {headers :new HttpHeaders({'Content-Type': 'application/json', 
       'X-Requested-With': 'XMLHttpRequest'})})
       .pipe(
         map((res:any)=>{return res}));
    }



  
  
}
