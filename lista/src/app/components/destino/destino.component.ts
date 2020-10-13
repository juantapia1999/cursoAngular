import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from 'src/app/models/destino-viaje.model';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @HostBinding('attr.class') cssClas = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>;
  constructor() {
    this.clicked=new EventEmitter();
  }

  ngOnInit(): void {
  }
  ir(){
    this.clicked.emit(this.destino);
    return false;
  }

}
