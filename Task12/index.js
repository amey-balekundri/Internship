window.onload=()=>{

    let contact_details=[]
    let editMode=false
    let editCardIndex=0

    $('#cancel-edit').hide()

    document.getElementById("save").onclick = () => {
        let contact_name=document.getElementById("name").value
        let email=document.getElementById("email").value
        let phone_no=document.getElementById("phone_no").value

        if (editMode==true){
            contact_details[editCardIndex]["contact_name"]=contact_name
            contact_details[editCardIndex]["email"]=email
            contact_details[editCardIndex]["phone_no"]=phone_no
            editMode=false
            $('#cancel-edit').hide()
        }
        else{
            contact_details.push({contact_name,email,phone_no})
        }

        cardRender()

        document.getElementById("name").value=''
        document.getElementById("email").value=''
        document.getElementById("phone_no").value=''
    }

    document.getElementById("cancel-edit").onclick = () =>{
        document.getElementById("name").value=''
        document.getElementById("email").value=''
        document.getElementById("phone_no").value=''
        editMode=false
        $('#cancel-edit').hide()

    }

    const cardRender = () => {
       let cardHtml=contact_details.map((value,index)=>{
            let data=`<div class="card mx-2">
                        <i id="card-delete" onclick="deleteCard(['${index}'])" class="far fa-trash-alt fa-lg"></i>
                        <i id="card-edit" onclick="editCard(['${value.contact_name}','${value.email}','${value.phone_no}','${index}'])" class="far fa-edit fa-lg"></i>
                        <div class="card-body">
                            <h5 class="card-title">${value.contact_name}</h5>
                            <p class="card-text">${value.email}</p>
                            <p class="card-text">${value.phone_no}</p>
                        </div>
                    </div>`
            return data;
        });
        document.getElementById("right-content").innerHTML=cardHtml.join("")
    }

    editCard = (details) => {
        document.getElementById("name").value =details[0]
        document.getElementById("email").value =details[1]
        document.getElementById("phone_no").value =details[2]
        editCardIndex=details[3]
        editMode=true;
        $('#cancel-edit').show()
    }

    deleteCard = (index) => {
        contact_details.splice(index,1)
        cardRender()
    }

}