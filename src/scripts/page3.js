import { El } from "./el.JS";
import wallpaper2 from "../assets/wallpaper2.png"; 
const header = function () {
  return El({
    element: "div",
    children: [

      El({
        element: "img",
        className: "w-full h-full object-cover brightness-75 ",  
        src: wallpaper2
      }),
     
      El({
        element: "header",
        className: "absolute inset-0 mx-7 my-[600px]",  
        children: [
          El({
            element: "h1",
            className: "text-black text-3xl text-center font-medium pt-[30px]",  
            children: ["We provide high quality products just for you"],
          }),El({
            element: "button",
            className: "mt-[140px] mx-3 px-[150px] py-[10px] bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300",
            children: ["Next"],
            onClick: () => {
              console.log("Button clicked!");
            
            }
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
