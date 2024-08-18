const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// console.log(gameContainer,userResult,cpuResult,result,optionImages);


optionImages.forEach((image, index)=> {
    image.addEventListener("click", (e) => {
        image.classList.add("active")

  
        userResult.src =  cpuResult.src = "./rockpaper-img/rock.png";
        result.textContent = "Wait.."

        optionImages.forEach((image2,index2) => {
            // console.log(index,index2);
            index !== index2 && image2.classList.remove("active")
        });


        gameContainer.classList.add("start")

        let time = setTimeout(()=>{
            

            gameContainer.classList.remove("start")

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc
            // console.log(imageSrc);
            

            let randomNumber = Math.floor(Math.random() * 3);
            // console.log(randomNumber);
            
            let cpuImages = ["./rockpaper-img/rock.png","./rockpaper-img/paper.png","./rockpaper-img/scissors.png"]
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R","P","S"][randomNumber]
            let userValue = ["R","P","S"][index]

            let outcome = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let outComeValue = outcome[userValue + cpuValue]
            

            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!` 
            // console.log(outComeValue);
            
        },2500)


        
    });
});