import { El } from "./el.JS";


const header=function(){
    return El({element:'header',
        children:[El({
            element:'h1'
            ,children:['shoea']
        })]
    })
}
const app=document.getElementById('app')
app.append(header())