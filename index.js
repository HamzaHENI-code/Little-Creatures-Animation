function vectorLength(x1,y1,x2,y2){
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
}
function eyeMovement(x,y){
    let listOfCreatures = document.querySelectorAll(".creature");
    listOfCreatures.forEach(creature => {
        let centralPoint = creature.querySelector(".centralPoint").getBoundingClientRect();
        let irises = creature.querySelectorAll(".iris");
        let vectorL = vectorLength(x,y,centralPoint.x,centralPoint.y);
        let verticalOffset = ((centralPoint.y-y) / vectorL)*12;
        let horizentalOffset = ((centralPoint.x-x) / vectorL)*12;
        irises.forEach(iris =>{
            iris.style.left = `calc(25% - ${horizentalOffset}%)`;
            iris.style.top = `calc(25% - ${verticalOffset}%)`;
        })
        let eyes = creature.querySelectorAll(".eyeSocket");
        eyes.forEach(eyeSocket =>{
            eyeSocket.addEventListener("mouseenter", () => {
                let eye = eyeSocket.querySelector(".eye");
                eye.classList.remove("openEye");
                eye.classList.add("closedEye");
            });

            eyeSocket.addEventListener("mouseleave", () => {
                let eye = eyeSocket.querySelector(".eye");
                eye.classList.remove("closedEye");
                eye.classList.add("openEye");
            });
        })
    });
}
function closeEyes(){
    let listOfCreatures = document.querySelectorAll(".creature");
    listOfCreatures.forEach(creature => {
        let eyes = creature.querySelectorAll(".eyeSocket");
        eyes.forEach(eyeSocket =>{
            eyeSocket.addEventListener("mouseenter", () => {
                let eye = eyeSocket.querySelector(".eye");
                eye.classList.remove("openEye");
                eye.classList.add("closedEye");
            });

            eyeSocket.addEventListener("mouseleave", () => {
                let eye = eyeSocket.querySelector(".eye");
                eye.classList.remove("closedEye");
                eye.classList.add("openEye");
            });
        })
            creature.addEventListener("mouseenter", () => {
                let mouth = creature.querySelector(".mouth");
                mouth.classList.remove("openMouth");
                mouth.classList.add("closedMouth");
            });

            creature.addEventListener("mouseleave", () => {
                let mouth = creature.querySelector(".mouth");
                mouth.classList.remove("closedMouth");
                mouth.classList.add("openMouth");
            });
    });
}
closeEyes();
document.addEventListener("mousemove", (e) => {
    eyeMovement(e.clientX,e.clientY);
});