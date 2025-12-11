// Your GitHub raw image URL
const githubImageURL = "https://github.com/Eranio-bit/WeddingGift/blob/d64957ce18c708e3e5d339d09a5ceb18a96b11a1/image2.png?raw=true";
const backgroundImage = "https://github.com/Eranio-bit/WeddingGift/blob/d64957ce18c708e3e5d339d09a5ceb18a96b11a1/image.png?raw=true";

// Your text
const text = "Hello! Please contribute here";

document.getElementById("title").textContent = text;
document.getElementById("image").src = githubImageURL;
document.getElementById("app").style.backgroundImage = `url('${backgroundImageURL}')`;
