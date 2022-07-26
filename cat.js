function g(){
    //after clicking we want space for image
    let img = document.createElement("img")

    document.getElementById("contain").appendChild(img)
    //get to the div and append that img and giv source 
    img.src="http://thedogapi.com/api/images/get?format=src&type=gif&size=small"
}