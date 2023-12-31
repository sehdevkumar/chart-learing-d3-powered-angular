import { ElementRef } from '@angular/core'

export type d3DragBehavior = d3.ZoomBehavior<Element, unknown>
export type d3SelectionBase = d3.Selection<
  d3.BaseType,
  any,
  HTMLElement | any,
  any | NodeList
>

interface AxisOutline<T> {
  ticksIndices: Array<number>
  values: Array<T | null>
  domains: Array<T>
  ranges: Array<number | string>
}
export type BarChatOutline<T> = AxisOutline<T>

export interface IChartAxisInstance {
  xScale: d3.ScaleBand<any> | d3.ScaleLinear<any, any, never>
  yScale: d3.ScaleLinear<any, any, never> | d3.ScaleBand<any>
  viewGroup: d3SelectionBase
  viewDimConfig: IViewDimConfig
  axisOutlines: BarChatOutline<any>[]
}

// Just Dummay Interface
export interface ICellsOccupancyResponse {
  spillOver?: string
  available?: string
  occupied?: string
  reserved?: string
}

export interface ILaborsMachineResponse {
    labors:Points[],
    machines:Points[]
}

export interface IContainersResosponse {
  container_20_fit: number | string
  container_40_fit: number | string
  id: string
}

export enum ChartOccupancyEnum {
  spillOver = 'spillOver',
  available = 'available',
  occupied = 'occupied',
  reserved = 'reserved',
  container_40_fit = 'container_40_fit',
  container_20_fit = 'container_20_fit',
  hollow = 'hollow',
  labor='labor',
 machine='machine'
}

export interface IViewDimConfig {
  rendererInstance?: ElementRef
  rendererHeight: number
  rendererWidth: number
  margin: ICustomBarDim
  viewHeight: number
  viewWidth: number
}

export interface ICustomBarDim {
  top: number
  right: number
  bottom: number
  left: number
  height?: number
  width?: number
}

export enum ChartEnumClass {
  BAR_CHART_CLASS = 'bar-chart-class',
}

export enum BarChartRenderingType {
  MONTHLY = 'MONTHLY',
  WEEKLY = 'WEEKLY',
  YEARLY = 'YEARLY',
}

export interface IChartToolTip {
  markColor: string
  value: string
}


export interface  Points {
   x:number;
   y:number;
}
