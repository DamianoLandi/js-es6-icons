const select = document.getElementById("type-select");

const cardTitle = document.getElementsByClassName("card-title");

const cardSubtitle = document.getElementsByClassName("card-subtitle");

for(let i = 0; i < icons.length; i++){
    cardTitle[i].innerHTML = `<i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>`
    switch(icons[i].type){
        case "animal":
            cardTitle[i].classList.add("animal");
            break;
        case "vegetable":
            cardTitle[i].classList.add("vegetable");
            break;
        case "user":
            cardTitle[i].classList.add("user");
            break;
        case "company":
            cardTitle[i].classList.add("company");
            break;
    }
};

for(let i = 0; i < icons.length; i++){
    cardSubtitle[i].innerHTML = `${icons[i].name}`
};



