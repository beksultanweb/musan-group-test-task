import { FC } from "react"

export interface IRequest {
    id: number,
    name: string,
    tel: string,
    email: string,
    city: string,
    date: Date
}

export interface RouteElements {
    path: string,
    element: FC
}