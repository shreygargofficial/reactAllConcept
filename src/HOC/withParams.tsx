import React from "react";
import { ComponentClass, FunctionComponent } from "react"
import { useHref, useNavigate, useNavigation, useParams } from "react-router-dom"

type Props ={
    params:any,
}
type PropsReceivedFromRoute={
    surname: string
}
export function withParams(Component : ComponentClass<Props & PropsReceivedFromRoute> | FunctionComponent<Props & PropsReceivedFromRoute>) {
     return function NewComponent(propsReceivedFromRoute:PropsReceivedFromRoute){
        const params = useParams();
        return <Component params={params} {...propsReceivedFromRoute}  />
    }
  
}