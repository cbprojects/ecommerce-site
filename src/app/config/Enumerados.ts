import { Injectable } from '@angular/core';
import { SesionService } from '../services/sesionService/sesion.service';
import { TextProperties } from './TextProperties';


@Injectable()
export class Enumerados {

  constructor(public textProperties: TextProperties, public sesionService: SesionService) {
  }

  getEnumerados() {
    let properties = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);

    return {
      sino: {
        cod: 1, valores: [
          { value: "SI", label: properties.lbl_enum_si },
          { value: "NO", label: properties.lbl_enum_no }
        ]
      },
      tipoDocumento: {
        cod: 2, valores: [
          { value: "-1", label: properties.lbl_enum_generico_valor_vacio },
          { value: "CEDULA", label: properties.lbl_enum_tipo_documento_valor_cc },
          { value: "CEDULA_EXTRANJERIA", label: properties.lbl_enum_tipo_documento_valor_ce },
          { value: "NIT", label: properties.lbl_enum_tipo_documento_valor_ni },
          { value: "PASAPORTE", label: properties.lbl_enum_tipo_documento_valor_pa }
        ]
      },
      tipoFactura: {
        cod: 3, valores: [
          { value: "-1", label: properties.lbl_enum_generico_valor_vacio },
          { value: "AJUSTE", label: properties.lbl_enum_tipo_factura_ajuste },
          { value: "ANULACION", label: properties.lbl_enum_tipo_factura_anulacion },
          { value: "COMPRA", label: properties.lbl_enum_tipo_factura_compra },
          { value: "COSTO", label: properties.lbl_enum_tipo_factura_costo },
          { value: "COTIZACION", label: properties.lbl_enum_tipo_factura_cotizacion },
          { value: "GASTO", label: properties.lbl_enum_tipo_factura_gasto },
          { value: "INGRESO", label: properties.lbl_enum_tipo_factura_ingreso },
          { value: "VENTA", label: properties.lbl_enum_tipo_factura_venta }
        ]
      },
      estadoFactura: {
        cod: 4, valores: [
          { value: "-1", label: properties.lbl_enum_generico_valor_vacio },
          { value: "ANULADA", label: properties.lbl_enum_estado_factura_anulada },
          { value: "CANCELADA", label: properties.lbl_enum_estado_factura_cancelada },
          { value: "ERROR", label: properties.lbl_enum_estado_factura_error },
          { value: "PAGADA", label: properties.lbl_enum_estado_factura_pagada },
          { value: "PENDIENTE", label: properties.lbl_enum_estado_factura_pendiente },
          { value: "VENCIDA", label: properties.lbl_enum_estado_factura_vencida }
        ]
      },
      tipoProducto: {
        cod: 5, valores: [
          { value: "-1", label: properties.lbl_enum_generico_valor_vacio },
          { value: "ARTICULO", label: properties.lbl_enum_tipo_producto_articulo },
          { value: "SERVICIO", label: properties.lbl_enum_tipo_producto_servicio }
        ]
      },
      unidad: {
        cod: 6, valores: [
          { value: "-1", label: properties.lbl_enum_generico_valor_vacio },
          { value: "BULTO", label: properties.lbl_enum_tipo_unidad_valor_bulto },
          { value: "CANECA", label: properties.lbl_enum_tipo_unidad_valor_caneca },
          { value: "FRASCO", label: properties.lbl_enum_tipo_unidad_valor_frasco },
          { value: "GALON", label: properties.lbl_enum_tipo_unidad_valor_galon },
          { value: "GRAMO", label: properties.lbl_enum_tipo_unidad_valor_gramo },
          { value: "HORA", label: properties.lbl_enum_tipo_unidad_valor_hora },
          { value: "LITRO", label: properties.lbl_enum_tipo_unidad_valor_litro },
          { value: "METRO", label: properties.lbl_enum_tipo_unidad_valor_metro },
          { value: "METRO_CUADRADO", label: properties.lbl_enum_tipo_unidad_valor_metro_cuadrado },
          { value: "UNIDAD", label: properties.lbl_enum_tipo_unidad_valor_unidad }
        ]
      },
      metodoPago: {
        cod: 5, valores: [
          { value: "-1", label: properties.lbl_enum_generico_valor_vacio },
          { value: "EFECTIVO", label: properties.lbl_enum_metodo_pago_efectivo },
          { value: "TARJETA_DEBITO", label: properties.lbl_enum_metodo_pago_tarjeta_debito },
          { value: "TARJETA_CREDITO", label: properties.lbl_enum_metodo_pago_tarjeta_credito }
        ]
      },
      //valorIva: {cod: 25},
    }
  };
}