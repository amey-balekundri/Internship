const newcontact =async (payload) => {
    const response =await fetch('http://localhost:5000/api/contacts/new-contact' ,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers : {
            'Content-Type':'application/json'
        } 
    })
}

const updatecontact =async (payload) => {
    const response =await fetch('http://localhost:5000/api/contacts/update-contact-byid' ,{
        method: 'PUT',
        body: JSON.stringify(payload),
        headers : {
            'Content-Type':'application/json'
        } 
    })
}

const deletecontact =async (payload) => {
    const response =await fetch('http://localhost:5000/api/contacts/delete-contact-byid' ,{
        method: 'DELETE',
        body: JSON.stringify(payload),
        headers : {
            'Content-Type':'application/json'
        } 
    })
}

const delete_all =async () => {
    const response =await fetch('http://localhost:5000/api/contacts/delete-all' ,{
        method: 'DELETE',
        headers : {
            'Content-Type':'application/json'
        } 
    })
}

const getallcontact =async () => {
    const response =await fetch('http://localhost:5000/api/contacts/get-all-contacts' ,{
        method: 'GET',
        headers : {
            'Content-Type':'application/json'
        } 
    })
    return response.json()
}

const getcontact =async (payload) => {
    const response =await fetch('http://localhost:5000/api/contacts/get-contact-byid' ,{
        method: 'POST',
        body:JSON.stringify(payload),
        headers : {
            'Content-Type':'application/json'
        } 
    })
    return response.json()
}

const cardRender = async () => {
    const response=await getallcontact();
    const contacts=response['data']
    cardHtml=[]
    for(i of contacts){
        let data=`<div class="card mx-4">
                        <i id="card-delete" onclick="deleteContactCard(['${i._id}'])" class="far fa-trash-alt fa-lg"></i>
                        <i id="card-edit" onclick="editContactCard(['${i._id}'])" class="far fa-edit fa-lg"></i>
                        <img src="img/img.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${i.name}</h5>
                            <p class="card-text">${i.email}</p>
                            <p class="card-text">${i.address}</p>
                            <p class="card-text">${i.phoneno}</p>
                        </div>
                    </div>`
        cardHtml.push(data)
    }
    console.log(contacts)
    document.getElementById("right-content").innerHTML=cardHtml.join("")
}

$("#save").click(() => {
    if (editMode==true){
        let payload={
            id:editid,
            name:$('#name').val(),
            email:$('#email').val(),
            phoneno:$('#phone_no').val(),
            address:$('#address').val(),
        }
        updatecontact(payload)
        editMode=false
        editid=0
        $('#cancel-edit').hide()
    }
    else{
        let payload={
            name:$('#name').val(),
            email:$('#email').val(),
            phoneno:$('#phone_no').val(),
            address:$('#address').val(),
        }
        newcontact(payload);
    }

    cardRender(); //not working

    document.getElementById("name").value=''
    document.getElementById("email").value=''
    document.getElementById("phone_no").value=''
    document.getElementById("address").value=''
});

$('#cancel-edit').click(()=>{
    document.getElementById("name").value=''
    document.getElementById("email").value=''
    document.getElementById("phone_no").value=''
    document.getElementById("address").value=''
    editMode=false
    editid=0
    $('#cancel-edit').hide()    
})

$('#delete-all').click(()=>{
    delete_all()
})

editContactCard = async (id) => {
    let payload={
        id:id
    }
    response=await getcontact(payload);
    data=response['data']
    document.getElementById("name").value =data.name
    document.getElementById("email").value =data.email
    document.getElementById("phone_no").value =data.phoneno
    document.getElementById("address").value=data.address

    editid=id
    editMode=true;
    $('#cancel-edit').show()
}

deleteContactCard = async (id) => {
    let payload={
        id:id
    }
    deletecontact(payload)
}

cardRender()

let editMode=false;
let editid=0


$('#cancel-edit').hide();
