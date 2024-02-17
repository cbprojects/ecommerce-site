import { Injectable } from '@angular/core';

@Injectable()
export class ObjectModelInitializer {

  constructor() {
  }

  // Shared
  getLocaleESForCalendar() {
    return {
      firstDayOfWeek: 1,
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
  };

  getLocaleENForCalendar() {
    return {
      firstDayOfWeek: 1,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      clear: 'Clear'
    }
  };

  getDataPorcentajeURIWeb(code: string, symbol: string) {
    return {
      codigo: code,
      simbolo: symbol
    }
  };

  getDataEnumerado() {
    return {
      label: "",
      value: 0
    }
  }

  getDataEnumeradoByValue(label: string, value: any) {
    return {
      label: label,
      value: value
    }
  }

  getDataMessage() {
    return {
      // info, success, warning, danger
      severity: "",
      // Title of MSG
      summary: "",
      // Description of MSG
      detail: ''
    }
  };

  getDataTable() {
    return {
      // Campo de la tabla
      field: "",
      // Encabezado
      header: ''
    }
  };

  // Identity
  getDataServiceSesion() {
    return {
      // data
      phase: "",
      usuarioSesion: "",
      usuarioRegister: "",
      tokenSesion: "",
      decodedToken: "",
      expirationDate: "",
      idioma: "",

      // Excepciones
      mensajeError403: "",
      mensajeError404: "",
      mensajeError500: "",

      // Mensajes
      mensajeConfirmacion: ''
    }
  };

  getTokenSesion() {
    return {
      name: "",
      token: ''
    }
  };

  // Menu Model
  initializerMenuModel() {
    return {
      index: 0,
      title: "",
      subtitle: "",
      link: "",
      icon: "",
      active: false,
      disable: false,
      severity: ""
    }
  };

  initializerUserModel() {
    return {
      _id: null,
      name: "",
      lastName: "",
      mail: "",
      password: "",
      receiveNewsletter: true,

      active: true,
      createUser: "",
      updateUser: "",
      createDate: new Date(),
      updateDate: new Date()
    }
  };

  initializerSubscriptionModel() {
    return {
      _id: null,
      currency: "",
      value: 0,
      type: 0,
      userId: "",
      userName: "",
      userEmail: "",
      status: 0,
      expirationDate: new Date(),
      registerDate: new Date(),

      active: true,
      createUser: "",
      updateUser: "",
      createDate: new Date(),
      updateDate: new Date()
    }
  };

  initializerPaymentModel() {
    return {
      _id: null,
      currency: "",
      value: 0,
      status: 0,
      paymentDate: new Date(),
      subscription: this.initializerSubscriptionModel(),

      active: true,
      createUser: "",
      updateUser: "",
      createDate: new Date(),
      updateDate: new Date()
    }
  };
}