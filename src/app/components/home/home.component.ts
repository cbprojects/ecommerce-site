import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { SubscriptionModel } from 'src/app/model/subscription-model';
import { SesionService } from 'src/app/services/sesionService/sesion.service';
import { environment } from 'src/environments/environment.prod';
import { RestService } from '../.././services/rest.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})

export class HomeComponent implements OnInit {
  // Objetos de Sesion
  sesion: any;

  // Objetos de datosean
  cardName: any;
  cardNumber: any;
  cardExpiration: any;
  cardCvc: any;
  showPnlPayment: boolean = false;
  subscription: SubscriptionModel | undefined;

  // Utilidades
  msg: any;

  // Charts

  constructor(private router: Router, private route: ActivatedRoute, public rest: RestService, public textProperties: TextProperties, public util: Util, public omi: ObjectModelInitializer, public enumerados: Enumerados, public sesionService: SesionService, private messageService: MessageService) {
    this.sesion = this.omi.getDataServiceSesion();
    this.msg = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);
  }

  ngOnInit() {
    this.inicializar();
    let cerrarSesion = localStorage.getItem("cerrarSesion") === "1";
    if (cerrarSesion) {
      this.messageService.clear();
      localStorage.clear();
    }
  }

  ngOnDestroy() {
  }

  inicializar() {
    this.showPnlPayment = false;
    this.subscription = undefined;
    let userSubscription = localStorage.getItem("user-suscription-ecommerce");
    if (userSubscription) {
      this.subscription = JSON.parse(userSubscription);
    }
  }

  getShadow(color: string) {
    return "background: " + color + "; box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 10px -5px " + color + ";"
  }

  suscribirse(type: number) {
    try {
      let request = this.buildRequestSubscription(type);
      this.rest.postREST(environment.urlSubscription, request).subscribe({
        next: (res: any) => {
          console.log(res);
          this.subscription = res.data;
          localStorage.setItem("user-suscription-ecommerce", JSON.stringify(this.subscription));
          this.util.showMessage(this.msg.lbl_summary_success, "¡Subscripción Exitosa!", environment.severity[1]);
        },
        error: (e) => this.messageService.add(this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2]))
      });
    } catch (error) {
      console.log(error);
      this.messageService.add(this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3]));
    }
  }

  buildRequestSubscription(type: number) {
    let request = this.omi.initializerSubscriptionModel();
    request.createUser = this.sesionService.objServiceSesion.usuarioSesion.mail;
    request.updateUser = this.sesionService.objServiceSesion.usuarioSesion.mail;
    request.status = 1;
    request.userId = this.sesionService.objServiceSesion.usuarioSesion._id;
    request.userName = this.sesionService.objServiceSesion.usuarioSesion.name;
    request.userEmail = this.sesionService.objServiceSesion.usuarioSesion.mail;
    request.registerDate = new Date();
    request.expirationDate = new Date();
    request.expirationDate.setFullYear(request.registerDate.getFullYear() + 1);
    request.currency = "USD";
    request.value = type === 0 ? 999.00 : 9000.00
    request.type = type;

    return request;
  }

  irAPagar() {
    this.showPnlPayment = true;
  }

  irAUsuarios() {
    this.router.navigate(['/users']);
  }

  pagar() {
    try {
      let request = this.buildRequestPayment();
      this.rest.postREST(environment.urlPayments, request).subscribe({
        next: (res: any) => {
          console.log(res);
          this.messageService.add(this.util.showMessage(this.msg.lbl_summary_success, "¡Pago Exitoso!", environment.severity[1]));
          this.showPnlPayment = false;
        },
        error: (e) => this.messageService.add(this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2]))
      });
    } catch (error) {
      console.log(error);
      this.messageService.add(this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3]));
    }
  }

  buildRequestPayment() {
    let request = this.omi.initializerPaymentModel();
    if (this.subscription) {
      request.createUser = this.sesionService.objServiceSesion.usuarioSesion.mail;
      request.updateUser = this.sesionService.objServiceSesion.usuarioSesion.mail;
      request.status = 1;
      request.paymentDate = new Date();
      request.currency = "USD";
      request.subscription = this.subscription;
      request.value = this.subscription.type === 0 ? 999.00 : 9000.00;
    }

    return request;
  }

}