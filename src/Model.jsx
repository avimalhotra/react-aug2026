import { createPortal } from "react-dom";

export default function Model({children}){
     const mroot=document.querySelector("#modal-root");
     return createPortal(children,mroot);
}