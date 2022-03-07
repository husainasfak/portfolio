import { BreakPoint } from './../../services/breakpoint.service';
import { Project } from './../../interface/project.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { projectsData } from '../../Data/project.data';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  id!: string;
  projectDetail!: Project;
  routeSubscritpion!: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    public layout: BreakPoint
  ) {}

  ngOnInit(): void {
    this.routeSubscritpion = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        projectsData.map((element) => {
          if (element.id === this.id) {
            this.projectDetail = element;
          }
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSubscritpion.unsubscribe();
  }
}
