const blogButton = document.querySelector(".blog__button");
let blogIndex = 1;

function addBlogCard(index) {
        const blogList = document.querySelector(".blog__list");

        const blogCard = document.createElement("div");
        blogCard.className = "blog__card";

        const blogImage = document.createElement("img");
        blogImage.src = "./images/Vector" + index + ".png";

        const blogDesc = document.createElement("p");
        blogDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do... ";

        const blogDate = document.createElement("span");
        blogDate.textContent = "September 10th"

        blogCard.append(blogImage, blogDesc, blogDate);
        blogList.append(blogCard);
}

blogButton.addEventListener("click", () => {
    if(blogIndex < 3 && window.innerWidth <= 700) {
        blogIndex++;
        addBlogCard(blogIndex);
        if(blogIndex === 3) {
            blogButton.style.display = "none";
        }
    } 
})

if(window.innerWidth >= 700) {
    addBlogCard(2);
    addBlogCard(3);
}