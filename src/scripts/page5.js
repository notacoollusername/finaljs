import { El } from "./el.JS";
import wallpaper5 from "../assets/p5wall.png"; 
const header = function () {
  return El({
    element: "div",
    children: [

      El({
        element: "img",
        className: "w-full h-full object-cover brightness-75 ",  
        src: wallpaper5
      }),
     
      El({
        element: "header",
        className: "absolute inset-0 mx-7 my-[600px]",  
        children: [
          El({
            element: "h1",
            className: "text-black text-3xl text-center font-medium pt-[30px]",  
            children: ["Let’s fulfill your fashion needs with shoearight now!"],
          }),El({
            element: "button",
            className: "mt-[140px] mx-3 px-[130px] py-[10px] bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300",
            children: ["Get Started"],
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
