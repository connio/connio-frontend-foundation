import { BaseLayoutProps } from "../base-layout/types"

export interface AppLayoutProps extends BaseLayoutProps {
    title:string
    breadcrumb?:Array<ModuleProps> 
}