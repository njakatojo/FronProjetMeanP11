import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Stat_1 } from '../model/Stat_1';
import { DataService } from '../serve/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-acceuil',
  standalone: true,
	imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  chartOptions: any = {
    title: {
      text: 'Temps Moyenne',
    },
    theme: 'light2',
    animationEnabled: true,
    exportEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: '#mn',
    },
    data: [],
  };
  Stat1: Stat_1[] = []

  constructor(
    private Service: DataService,
    ) { }

  ngOnInit(): void {
    this.Service.gettous("V_stat_1").subscribe((donnees) => {
      this.Stat1 = donnees as Stat_1[]
      
      this.chartOptions.data = [
        {
          type: 'column',
          yValueFormatString: '# minutes',
          color: '#01b8aa',
          dataPoints: this.Stat1.map((item) => ({
            label: item.employer.nom,
            y: item.moyenneDuree,
          })),
        },
      ];
      console.log(this.chartOptions.data)
    });
  }
}
