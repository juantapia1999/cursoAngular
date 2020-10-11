import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {
  @Input() nombre:string;
  constructor() {
    //this.nombre="nombre por defecto";
   }

  ngOnInit(): void {
  }

}
