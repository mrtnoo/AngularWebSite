

import { Component,  Input,  OnInit } from '@angular/core';
import { Project } from 'src/app/modelo/Project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService , UploadService]
})
export class CreateComponent implements OnInit {

  public project: Project;
  public title: string;
  public status: String;
  public filesToUpload: Array<File>;
  public save_project: any;


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
    
  ){
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2023,'','');
  }
    
  ngOnInit(){

  }

  onSubmit(form:any){
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){
                   
          this._uploadService.makeFileRequest(global.url+"upload-image/"+response.project._id, [] , this.filesToUpload, "image")
          .then((result:any) => {
            this.status = "success";
            console.log(result);  
            console.log(response.project);
          
            form.reset();

          });
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
