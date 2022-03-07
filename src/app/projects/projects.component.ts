import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Project } from '../interface/project.model';
import { BreakPoint } from '../services/breakpoint.service';
import { projectsData } from '../Data/project.data';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects!:Array<Project>;


  constructor(
    public layout:BreakPoint,
  
    private router:Router
    ) { }

  ngOnInit(): void {
    this.projects = projectsData
  }


  onDetail(id:string){
    this.router.navigate(['projects',id])
  }

  

}
