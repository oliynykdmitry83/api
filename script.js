//import fs from "fs";
import OpenAI from "openai";

const openAi = new OpenAI();


async function fetchData(){

    try{

        const request = document.getElementById("generateImage").value.toLowerCase()

        const response = await openai.createImage({
            model: "dall-e-3",
            prompt: `${request}`,
            n: 1,
            size: "1024x1024",
          });
          image_url = response.data.data[0].url;
          

        if(!response.ok){
            throw new Error("Could not fetch the sourse");
        }

        const data = await response.json();
        console.log(data);
        const createdImage = image_url;
        const imgElement = document.getElementById("cretedImage");

        imgElement.src = createdImage;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error => console.error(error));
    }
}

fetchData()