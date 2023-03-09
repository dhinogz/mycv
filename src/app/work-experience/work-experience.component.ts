import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})

export class WorkExperienceComponent {

workExperience: Array<any> = [];

constructor() { }

ngOnInit(): void {
  let work1 = {
    fecha : "2023-Futuro",
    ubicacion : "Seattle, WA",
    puesto: "Software Engineer Intern",
    empresa: "Microsoft",
    logros : [
      { descripcion: "Creacion de software" },
      {descripcion: "Documentacion" },
    ]
  };

  let work2 = {
    fecha : "2022-Actualidad",
    ubicacion : "San Pedro, Garza Garcia, NL",
    puesto: "Backend Engineer Intern",
    empresa: "malc",
    logros : [
      {descripcion: "Manejo y diseno de base de datos" }, 
      {descripcion: "Desarrollo de APIs" },
    ]
  };
this.workExperience.push(work1); 
this.workExperience.push(work2);
}
}