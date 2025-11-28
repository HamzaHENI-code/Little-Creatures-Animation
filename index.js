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
function changeColor(eye){
    eye.style.setProperty("--eye-color", "rgba(255, 108, 108, 1)");
    eye.style.setProperty("--transition-length", "0.1s");
    setTimeout(() => {
        eye.style.setProperty("--eye-color", "whitesmoke");
        eye.style.setProperty("--transition-length", "0.0s");
    },3000)
}
function closeEyes(){
    let listOfCreatures = document.querySelectorAll(".creature");
    listOfCreatures.forEach(creature => {
        let eyes = creature.querySelectorAll(".eyeSocket");
        eyes.forEach(eyeSocket =>{
            let changeC = () => {};
            eyeSocket.addEventListener("click", () => {
                    changeC = changeColor;
                setTimeout(() => {
                    changeC = () => {};
                },3000)
            });
            eyeSocket.addEventListener("mouseenter", () => {
                let eye = eyeSocket.querySelector(".eye");
                eye.classList.remove("openEye");
                eye.classList.add("closedEye");
            });

            eyeSocket.addEventListener("mouseleave", () => {
                let eye = eyeSocket.querySelector(".eye");
                eye.classList.remove("closedEye");
                eye.classList.add("openEye");
                changeC(eye);
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
            let mouth = creature.querySelector(".mouth");
            let mouthLocation = "35%";
            mouth.addEventListener("mouseenter", () => {
                console.log(mouthLocation);
                if(mouthLocation == "35%"){
                    let value = Math.random() < 0.5 ? "0%" : "70%";
                    mouth.style.setProperty("--left-pos",value);
                    mouthLocation = value;
                    console.log("at center");
                }else{
                    mouth.style.setProperty("--left-pos","35%");
                    mouthLocation = "35%";
                    console.log("not at center");
                }
            });
            let mouthPlace = creature.querySelector(".mouthPlace");
            mouthPlace.addEventListener("mouseleave", () => {
                mouth.style.setProperty("--left-pos","35%");
                mouthLocation = "35%";
                console.log("left mouth place");
            });
    });
}
closeEyes();
document.addEventListener("mousemove", (e) => {
    eyeMovement(e.clientX,e.clientY);
});