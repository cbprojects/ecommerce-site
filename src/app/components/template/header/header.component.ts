import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeIn } from 'ng-animate';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { SubscriptionModel } from 'src/app/model/subscription-model';
import { UserModel } from 'src/app/model/user-model';
import { RestService } from 'src/app/services/rest.service';
import { SesionService } from 'src/app/services/sesionService/sesion.service';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService],
  animations: [
    trigger('fadeIn', [transition('* => open', useAnimation(fadeIn))])
  ]
})
export class HeaderComponent implements OnInit {
  // Objetos de Animaciones
  fadeIn: any;

  // Objetos de datos
  mail: string = "";
  password: string = "";
  user: UserModel | undefined;
  subscription: SubscriptionModel | undefined;

  // Utilidades
  msg: any;

  constructor(public router: Router, private route: ActivatedRoute, public rest: RestService, public messageService: MessageService, public textProperties: TextProperties, public omi: ObjectModelInitializer, public sesionService: SesionService, public util: Util) {
    this.msg = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);
  }

  ngOnInit() {
    this.sesionService.loadUser();
  }

  obtenerBreadcrumb(url: string) {
    return url;
  }

  cerrarSesion() {
    this.mail = "";
    this.password = "";
    this.sesionService.objServiceSesion.usuarioSesion = undefined;
    this.sesionService.objServiceSesion.esLogueado = false;
    localStorage.setItem("cerrarSesion", "1");
    localStorage.removeItem("user-ecommerce");
    localStorage.removeItem("user-suscription-ecommerce");
    $('#cerrar-mobile').click();
    this.router.navigate(['/home']);
  }

  login() {
    let defaultError = { error: { mensaje: "El usuario no existe o los datos son incorrectos", detalles: "" } };
    try {
      let loginUser = { mail: this.mail, password: this.password };
      this.rest.postREST(environment.urlUsers + "/login", loginUser).subscribe({
        next: (res: any) => {
          console.log(res);
          this.messageService.add(this.util.showMessage(this.msg.lbl_summary_success, "¡Login Exitoso!", environment.severity[1]));
          this.user = res.data;
          this.sesionService.objServiceSesion.usuarioSesion = this.user;
          this.sesionService.objServiceSesion.esLogueado = true;
          localStorage.setItem("user-ecommerce", JSON.stringify(this.user));
          this.findSubscriptionByUser(res.data.mail);
        },
        error: (e) => this.messageService.add(this.util.showErrorMessage(defaultError, this.msg.lbl_summary_warning, environment.severity[2]))
      });
    } catch (error) {
      console.log(error);
      this.messageService.add(this.util.showErrorMessage(defaultError, this.msg.lbl_summary_danger, environment.severity[3]));
    }
  }

  findSubscriptionByUser(mail: string) {
    try {
      this.rest.getREST(environment.urlSubscription + "/" + mail).subscribe({
        next: (res: any) => {
          console.log(res);
          this.subscription = res.data;
          localStorage.setItem("user-suscription-ecommerce", JSON.stringify(this.subscription));
        },
        error: (e) => console.log(e)
      });
    } catch (error) {
      console.log(error);
    }
  }

}