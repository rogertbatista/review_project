const reviews = [
    {
    id: 1,
    name: "Sophia Martinez",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: 
    "Ladies and gentlemen, welcome to the most unpredictable and exhilarating commentary you've ever witnessed! We're here today to explore the world of extreme cheese rolling championships. Yes, you heard me right, cheese rolling!"
    },
    {
    id: 2,
    name:"Olivia Anderson",
    job: "software engineer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "As our brave contestants stand at the top of that treacherous hill, the tension in the air is so thick you could cut it with a knife - or perhaps with a block of cheese! These folks are about to chase wheels of cheese down a hill so steep, it makes a rollercoaster look like a kiddie ride at the county fair."
    },
    {
    id: 3,
    name: "Benjamin Carter",
        job: "Hacker",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "And there they go! Look at the determination on their faces as they sprint after that rolling dairy delight. It's like watching a pack of hungry wolves chasing a particularly elusive prey, except in this case, the prey is a round of cheese."
    },
    {
    id: 4,
    name: "Samuel White",
    job: "Data scientist",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "I must say, it takes a special kind of courage to fling yourself down this hill. But these cheese enthusiasts are willing to risk it all for a taste of glory, or perhaps just a taste of cheddar, as they hurtle toward the finish line."
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})

img.style.width = '180px';
img.style.borderRadius = '50%';
img.style.height = '200px';
