fetchData()

async function fetchData(){

    try{
        const response = await fetch()

        if(!response.ok){
            throw new Error("Could not fetch the sourse");
        }

        const data = await response.json();
        console.log(data);
    }
    catch{
        console.error(error);
    }
}