import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../modelo/Project';
import { global } from './global';

@Injectable()
export class ProjectService{

    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    testService(){
        return 'probando el servidor angular';
    }

    saveProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save_project', params, {headers: headers});
    

    }

    getProjects() : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.get(this.url+'projects', {headers : headers});
    }

    getProject(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.get(this.url+'project/'+id, {headers : headers});
        }
    
}