let target = window.document.querySelector("#dynamic");

let randomString = ()=>{
    let TextContainers = ["Welcome My Portfolio","Web Developer", "Let's go see the landing page"];
    let selectText = TextContainers[Math.floor ( Math.random() * TextContainers.length)];
    let selectTextArrays = selectText.split("");
    return selectTextArrays;    
};

let resetTyping = () => {
    target.textContent="";
    dynamic(randomString());
};

let dynamic = (ramdomArray)=>{
    if(ramdomArray.length > 0){
        target.textContent += ramdomArray.shift();
        setTimeout(()=>{
            dynamic(ramdomArray);
        },80);
    }else{
        setTimeout(resetTyping,3000);
    }
}
dynamic(randomString());

let blank = ()=>{
    target.classList.toggle("active");
};

setInterval(blank,500);