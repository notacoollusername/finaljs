// import "../styles/style.css";
import { El } from "./el.JS";
import logo from "../assets/logo.png"


const header=function(){
    return El({
            element:'div',
            children:[El({ element:'img',
                className:'w-[231px] h-[63px] mx-[90px] my-[350px]',
                src:logo
            })]
        
    })
}
const app=document.getElementById('app')
app.append(header())