import { Injectable } from '@angular/core';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { environment } from 'src/environments/environment';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  // Fases
  objServiceSesion: any;
  usuarioRestaurarClave: any;
  esLogueado: boolean = false;

  constructor(public omi: ObjectModelInitializer) {
    this.inicializar();
    if (localStorage.getItem('objServiceSesion') !== undefined && localStorage.getItem('objServiceSesion') !== null) {
      this.objServiceSesion = JSON.parse(JSON.stringify(localStorage.getItem('objServiceSesion')));
    }
  }

  inicializar() {
    this.objServiceSesion = this.omi.getDataServiceSesion();
    this.objServiceSesion.phase = undefined;
    this.objServiceSesion.usuarioSesion = undefined;
    this.objServiceSesion.usuarioRegister = undefined;
    this.objServiceSesion.tokenSesion = undefined;
    this.objServiceSesion.decodedToken = undefined;
    this.objServiceSesion.expirationDate = undefined;
    this.objServiceSesion.mensajeError403 = undefined;
    this.objServiceSesion.mensajeError404 = undefined;
    this.objServiceSesion.mensajeError500 = undefined;
    this.objServiceSesion.mensajeConfirmacion = undefined;
    this.objServiceSesion.idioma = environment.idiomaEs;
  }

  getUsuarioSesionActual() {
    let result = null;
    if (typeof this.objServiceSesion.usuarioSesion !== 'undefined' && this.objServiceSesion.usuarioSesion !== null && this.objServiceSesion.usuarioSesion !== 'null') {
      result = this.objServiceSesion.usuarioSesion;
    }
    return result;
  }

  isSesionActiva() {

  }

  loadUser() {
    let user = localStorage.getItem("user-ecommerce");
    if (user !== undefined && user !== null) {
      this.objServiceSesion.usuarioSesion = JSON.parse(user);
      this.objServiceSesion.esLogueado = true;
    }
  }
}
