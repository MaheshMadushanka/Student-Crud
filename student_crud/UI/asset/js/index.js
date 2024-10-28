

document.getElementById("btn-register").addEventListener("click",()=>{
    let requestBody=mapRequest();
    fetch("http://localhost:8180/student",{
        method :"POST", 
        body :JSON.stringify(requestBody),
        headers : {
            "content-type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
})



function mapRequest() {
    let requestBody = {
        stdName: undefined,
        age: undefined,
        stdContact: undefined,
        grdName: undefined,
        grdContact: undefined,
        address: undefined
    };

    requestBody.stdName = document.getElementById("txt-std-name").value;
    requestBody.age = document.getElementById("txt-std-age").value;
    requestBody.stdContact = document.getElementById("txt-std-contact").value;
    requestBody.grdName = document.getElementById("txt-grd-name").value;
    requestBody.grdContact = document.getElementById("txt-grd-contact").value; 
    requestBody.address= document.getElementById("txt-grd-address").value;

    return requestBody;
}


document.getElementById("btn-clear").addEventListener("click", clear);

function clear() {
    document.getElementById("txt-std-name").value = "";
    document.getElementById("txt-std-age").value = "";
    document.getElementById("txt-std-contact").value = "";
    document.getElementById("txt-grd-name").value = "";
    document.getElementById("txt-grd-contact").value = "";
    document.getElementById("txt-grd-address").value = "";
}
