const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['../video/hero-1.mp4', '../video/hero-2.mp4', '../video/hero-3.mp4', '../video/hero-4.mp4',];

let index = 0;
nextButton.addEventListener('click',function(){
    index = (index + 1) % movieList.length;
    video.src = movieList[index];
});
const section = document.querySelector('.hero-section');
const observer = new IntersectionObserver(
    ([entry]) => {
        if(entry.isIntersecting){
            section.classList.add('blur-in');
        }else{
            section.classList.remove('blur-in');
        }
    },
    {threshold: 0.5}
);
observer.observe(section);



const aboutSection = document.querySelector('.about-section');



const aboutObserver = new IntersectionObserver(
    ([entry]) => {
        if (!entry.isIntersecting) {
            aboutSection.classList.add('blur-out');
        } else {
            aboutSection.classList.remove('blur-out');
        }
    },
    {
        threshold: 0.5
    }
);

aboutObserver.observe(aboutSection);
