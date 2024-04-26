// console.log('working')
// document.addEventListener('click',(event) => {

//     const circles = document.querySelectorAll(".border-circle");
//     const random = Math.random() * 180 + 20;


//     console.log(circles.length)
//     switch(circles?.length){
//         case 2:
//             var isIntersecting = false;
//             var circleDiffrenceX = 0;
//             var circleDiffrenceY = 0;
//             circles.forEach((elm) => {
//                 circleDiffrenceX =   Math.abs(circleDiffrenceX - (elm.clientWidth + elm.offsetLeft))
//                 circleDiffrenceY = Math.abs(circleDiffrenceY -  (elm.clientHeight + elm.offsetTop))
//                 console.log(elm.clientWidth + elm.offsetLeft,elm.clientWidth  , elm.offsetTop,elm, circleDiffrenceX, circleDiffrenceY)
//             });
//             console.log(circleDiffrenceX,'x',circleDiffrenceY,'y')
//             isIntersecting = (circleDiffrenceX < random) && (circleDiffrenceY < random)
//             if(isIntersecting) setTimeout(()=>alert('intersecting'),100)
//         default:
//             const circle = document.createElement("div");
//             circle.classList.add("border-circle");
//             circle.setAttribute(
//                 "style",
//                 `top :${event.clientY}px; left:${event.clientX}px; height:${random}px; width:${random}px`
//             );
//             document.querySelector("body").appendChild(circle); 
//     }
// })


console.log('working')
document.addEventListener('click',(event) => {

    const circles = document.querySelectorAll(".border-circle");


    
    if (circles?.length > 1) {
      circles.forEach((elm) => elm.remove());
    } else {
      const random = Math.random() * 180 + 20;
      const circle = document.createElement("div");
      circle.classList.add("border-circle");
      circle.setAttribute(
        "style",
        `top :${event.clientY}px; left:${event.clientX}px; height:${random}px; width:${random}px`
      );
      document.querySelector("body").appendChild(circle);
      const circles = document.querySelectorAll(".border-circle");
      if(circles?.length == 2){
        var isIntersecting = false;
        var circleDiffrenceX = 0;
        var circleDiffrenceY = 0;
        circles.forEach((elm) => {
            circleDiffrenceX =   Math.abs(circleDiffrenceX - (elm.clientWidth + elm.offsetLeft))
            circleDiffrenceY = Math.abs(circleDiffrenceY -  (elm.clientHeight + elm.offsetTop))
            console.log(elm.clientWidth + elm.offsetLeft,elm.clientWidth  , elm.offsetTop,elm, circleDiffrenceX, circleDiffrenceY)
        });
        console.log(circleDiffrenceX,'x',circleDiffrenceY,'y')
        isIntersecting = (circleDiffrenceX < random) && (circleDiffrenceY < random)
        if(isIntersecting) setTimeout(()=>alert('intersecting'),100)
      }
    }
})