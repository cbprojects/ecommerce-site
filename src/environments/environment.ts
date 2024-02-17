// export const HOST_USER = 'https://localhost:8443/api-user-server';
// export const HOST_PAYMENT = 'https://localhost:8443/api-payment-server';
export const HOST_USER = 'https://cbaeneprojects.com:8403/api-user-server';
export const HOST_PAYMENT = 'https://cbaeneprojects.com:8404/api-payment-server';
export const SYSTEM = 'https://www.ecommerce.cbaeneprojects.com';

export const environment = {
  production: true,
  version: "1.0.0",
  // URL'S + Info del Sistema
  urlDomain: `${SYSTEM}/`,
  urlUsers: `${HOST_USER}/user`,
  urlPayments: `${HOST_PAYMENT}/payment`,
  urlSubscription: `${HOST_PAYMENT}/subscription`,
  // Params
  tokenRecordarClave: '3vkd3ugAOnnXZGfUER8',
  correoRemitente: 'XXX@gmail.com',
  tokenUsernameAUTH: 'BaeneApp',
  tokenPasswordAUTH: 'Baene2021codex',
  tokenNameAUTH: 'access_token',
  codigoADMIN: 'RMRADM',
  // Date
  minDate: { year: 1000, month: 1, day: 1 },
  maxDate: new Date(),
  actualDate: new Date(),
  formatoFecha: 'dd/mm/yy',
  rangoYears: '1900:3000',
  // Misc
  idiomaEs: 1,
  idiomaEn: 2,
  phaseEdit: 'edit',
  phaseCreate: 'create',
  tipoCampoTexto: 1,
  tipoCampoEnum: 2,
  disabled: 'disabled',
  readOnly: 'readOnly',
  severity: ['info', 'success', 'warn', 'error'],
  actionModal: { 'show': 1, 'hidde': 2 },
  collectionSize: 0,
  maxSize: 1,
  rotate: true,
  pageSize: 1,
  menuConfiguracion: "C",
  menuAdministracion: "A",
  menuInventario: "I",
  menuAgenda: "G",
  menuMovimientos: "M",
  estadoActivoNumstring: 1,
  estadoInactivoNumstring: 0
};