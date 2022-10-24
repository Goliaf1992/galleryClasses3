





class Rectangle {
    constructor (height,width) {

        this.height = height;
        this.width = width;
        
    }
}

//extends 
class ImagesFrame extends Rectangle {

    constructor(height,width,bgImage,parentSelector,borderRadius,...rest) {

        super(height,width); //супер всегда идет первой строчкой дублирует ту часть кода которая была здесь у родителя
        
        
        this.bgImage = bgImage;
        this.bgSize = 'cover';
        this.parent = document.querySelector(parentSelector);
        this.borderRadius = borderRadius;

    }

    

    render() {
        const element = document.createElement('div');
        element.innerHTML = `<div></div>`;
        element.style.height = this.height + 'px';
        element.style.width = this.width + 'px';
        element.style.borderRadius =  this.borderRadius + 'px';
        element.style.backgroundImage = this.bgImage;
        element.style.backgroundSize = this.bgSize;
        element.classList.add('img');
        this.parent.append(element);
        return element;

    }

}



//avatar img

let avatar =  new ImagesFrame(300,300,`url(images/23.jpg`,'.info-container',150).render();
avatar.style.backgroundSize = 'cover';
avatar.style.backgroundPosition = '';


//creates divs for image-container 

let imgURL = ['IMG_0274.jpg','IMG_0275.jpg','IMG_0279.jpg','IMG_0280.jpg','IMG_0281.jpg','IMG_0297.jpg','IMG_0111.jpg','IMG_0145.jpg'];
let portraitsArr = [];

let imgUrlPeople = ['IMG_0111.jpg','IMG_0113.jpg','IMG_0115.jpg','IMG_0118.jpg','IMG_0119.jpg'];
let peopleArr = [];


function createImgDiv(arr,arr2,parent) {

    for (let i = 0; i<arr.length;i++){

        
        arr2[i] = new ImagesFrame(400,400,`url(images/${arr[i]}`,`${parent}`,20).render();
    }
    
    }

createImgDiv(imgURL,portraitsArr,'#portraits');

createImgDiv(imgUrlPeople,peopleArr,'#people');





function hideImg(selector) { //hide img



    document.querySelectorAll(selector).forEach(img=>{

    if(img.classList.contains('zoomed')){
        img.style.display = 'block';
    }

    else {
        img.style.display = 'none';
    }
    
});
}

    //show IMG

function showImg(selector) { 
    
    document.querySelectorAll(selector).forEach(img=>{

        img.style.display = 'block';});

 
}


//zoom img that was clicked and hide others

let count = 0;

document.querySelectorAll('.img-container').forEach(element=>{
    
    element.addEventListener('click', function(e) {
    const tgt = e.target; console.log(tgt);
    
        if(tgt.classList.contains('img')){

            tgt.classList.toggle('zoomed');
    
            hideImg('.img');
            
            
            count++;
            if (count>=2){
                showImg('.img');
                
                count = 0;
            }
    
        }
        
});});





// modal script

const trigger = document.querySelector('#contact'),
        modal = document.querySelector('#reach-me'),
        btnCloseModal = document.querySelector('#close-modal');

trigger.addEventListener('click',(event)=>{
    event.preventDefault();
    modal.showModal();
});

btnCloseModal.addEventListener('click',()=>{
    modal.close();
});



// -----------------locations javascript------------------

let imgUrlLocations = ['Haifa1.webp','moscow.jpg'];
let locationsArr = [];


// ------------------nav-bar-work javascript--------------



const navElementWork = document.querySelector('#nav-element');

navElementWork.addEventListener('click',(event)=>{
    event.preventDefault();
    document.querySelector('.additional-links-wrapper').classList.toggle('active');
    
    
});