// Your GitHub raw image URL
const githubImageURL = "https://github.com/Eranio-bit/WeddingGift/blob/6696db5da1bc8080fad24fbda7555ae7e2f933d9/image.png";

// Your text
const text = "Hello! This image is loaded from GitHub.";

document.getElementById("title").textContent = text;
document.getElementById("image").src = githubImageURL;
