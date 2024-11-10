import { El } from "./el.JS";
import wallpaper1 from "../assets/wallpaper1.png"; 
const header = function () {
  return El({
    element: "div",
    children: [

      El({
        element: "img",
        className: "w-full h-full object-cover brightness-75 ",  
        src: wallpaper1
      }),
     
      El({
        element: "header",
        className: "absolute inset-0 mx-7 my-[600px]",  
        children: [
          El({
            element: "h1",
            className: "text-white text-4xl m-[20px]",  
            children: ["Welcome to 👋"],
          }),   El({
            element: "h1",
            className: "text-white text-6xl font-bold m-[20px] ",  
            children: ["shoea"],
          }),El({
            element: "h1",
            className: "text-white  m-[20px]",  
            children: ["The best sneakers & shoes e-commerse app of the century for your fashion needs!"],
          })
        ],
      }),
    ],
  });
};


const app = document.getElementById("app");
if (app) {
  app.append(header());
}
