export interface Product{
  codigo_barras?: string,
  nombre_producto: string,
  granel: boolean,
  precio?: number,
  precio_kilo?: number,
  precio_neto: number,
  stock: number,
  ventas_totales: number
}