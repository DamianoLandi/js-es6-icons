const select = document.getElementById("type-select");

const cardTitle = document.getElementsByClassName("card-title");

const cardSubtitle = document.getElementsByClassName("card-subtitle");

for(let i = 0; i < icons.length; i++){
    cardTitle[i].innerHTML = `<i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>`
    cardTitle[i].classList.add(icons[i].type);
};

for(let i = 0; i < icons.length; i++){
    cardSubtitle[i].innerHTML = `${icons[i].name}`
};
