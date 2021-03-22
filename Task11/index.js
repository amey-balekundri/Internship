window.onload=()=>{

    document.getElementById("submit").onclick = () => {
        let contact_name=document.getElementById("name").value
        let email=document.getElementById("email").value
        let phone_no=document.getElementById("phone_no").value
        // console.log([contact_name,email,phone_no])

        try{
            delete_card=document.getElementById("delete-card").value
            document.getElementById(delete_card).remove()
        }
        finally{
            document.getElementById("right-content").innerHTML+=
            '<div class="card mx-2" id="'+email+'">'+
            // '<img src="img.png" class="card-img-top" alt="Card Image">'+
            '<i id="card-edit" onclick="editCard(['+"'"+contact_name+"',"+"'"+email+"',"+"'"+phone_no+"'"+'])" class="far fa-edit fa-lg"></i>'+
            // '<i id="card-edit" onclick="editCard()" class="far fa-edit fa-lg"></i>'+
            '<div class="card-body">'+
            '<h5 class="card-title" id="contact-name">'+contact_name+'</h5>'+
            '<p class="card-text" id="contact-email">'+email+'</p>'+
            '<p class="card-text id="contact-phoneno">'+phone_no+'</p>'+
            '</div>'+
            '</div>'
            
            document.getElementById("name").value=''
            document.getElementById("email").value=''
            document.getElementById("phone_no").value=''
            document.getElementById("delete-card").value=''
        }

    }

    const editCard = (contact_details) => {
        document.getElementById("name").value=contact_details[0]
        document.getElementById("email").value=contact_details[1]
        document.getElementById("phone_no").value=contact_details[2]
        document.getElementById("delete-card").value=contact_details[1]
    }


}
