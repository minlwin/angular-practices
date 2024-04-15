import { MenuModel } from "../../widgets/sub-menu/menu-model"

export interface SubSystem {
  icon:string
  name:string
  route:string
  menus: readonly MenuModel[]
}
