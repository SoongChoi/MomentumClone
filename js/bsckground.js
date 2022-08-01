const image_url = [
    "background1.jpeg",  "background2.jpeg", "background3.png", "background4.jpeg",
];

const todaysPicNumber = Math.floor(Math.random() * image_url.length);

const imageResource = document.createElement("img");
imageResource.src = `img/${image_url[todaysPicNumber]}`;
document.body.appendChild(imageResource);
// document.body.prepend(imageResource);