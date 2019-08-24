

const geData = async () => {

    const reponse = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await reponse.json();
    console.log(data);
}



try {

   geData();

}
catch(err){
    console.log(err);
}


/*


fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))



*/