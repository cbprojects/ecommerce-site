import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesionService/sesion.service';
import { ObjectModelInitializer } from './ObjectModelInitializer';
import { TextProperties } from './TextProperties';
import { Util } from './Util';

declare var $: any;

@Injectable()
export class Guardian implements CanActivate {
  msg: any;

  listaRefPorcentajesUri: any[];

  constructor(private router: Router, public messageService: MessageService, public omi: ObjectModelInitializer, public textProperties: TextProperties, public sesionService: SesionService, public util: Util) {
    this.msg = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);
    this.listaRefPorcentajesUri = this.util.cargarMatrizPorcentajeUri();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let URLactual = window.location.href;
    let URLTransformada = this.util.transformarSimboloUri(URLactual, this.listaRefPorcentajesUri);
    let sesionOK = false;
    let user = localStorage.getItem("usuarioSesionContactM");

    return true;
  }
}