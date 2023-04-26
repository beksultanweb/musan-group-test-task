import FormComp from "../components/Form"
import List from "../components/List"
import Thankyou from "../components/Thankyou"
import { RouteElements } from "../types/types"

export const routeElements: RouteElements[] = [
    {
        path: '/', element: FormComp
    },
    {
        path: '/list', element: List
    },
    {
        path: '/thankyou', element: Thankyou
    }
]