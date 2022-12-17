let hero = document.getElementById("hero");
let rand_no = Math.floor(Math.random() * 5);

hero.style.backgroundImage = `url('./media/stranger-things-${rand_no}.jpg')`;

if(window.innerHeight > 650) {
    hero.style.height = `${window.innerHeight}px`;
}

switch (rand_no) {
    case 1:
        hero.style.backgroundPosition = "top";
        break;

    case 2:
        hero.style.backgroundPosition = "center";
        break;

    default:
        hero.style.backgroundPosition = "bottom";
        break;
}


let list = document.getElementById("list");
const LIST_TOTAL = 8;

list.innerHTML = "";
for(let i = 0; i < LIST_TOTAL; i++) {
    list.insertAdjacentHTML('beforeend', `
        <li class="splide__slide">
            <img src="./media/netflix_logo_icon_170919.svg" alt="icon" class="netflix_icon">
            <img src="./media/${i}.jpg" alt="trending" class="trending_img" />
        </li>
    `);
}