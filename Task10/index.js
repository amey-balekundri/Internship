window.onload=()=>{

    document.getElementById("option1").onclick = () => {
        document.getElementById("user-image").src = "rock.png"
        document.getElementById("comp-image").src =  "question.png"
        document.getElementById("result").innerHTML = " "
    }

    document.getElementById("option2").onclick = () => {
        document.getElementById("user-image").src = "paper.png"
        document.getElementById("comp-image").src =  "question.png"
        document.getElementById("result").innerHTML = " "
    }

    document.getElementById("option3").onclick = () => {
        document.getElementById("user-image").src = "scissor.png"
        document.getElementById("comp-image").src =  "question.png"
        document.getElementById("result").innerHTML = " "
    }

    function randomNumber(min, max) {  
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    } 

    rulebook = (user_move,comp_move) => {
        if(user_move=="Rock" && comp_move=="Paper"){
            return "Lose"
        }
        if(user_move=="Rock" && comp_move=="Scissor"){
            return "Win"
        }
        if(user_move=="Paper" && comp_move=="Scissor"){
            return "Lose"
        }
        if(user_move=="Paper" && comp_move=="Rock"){
            return "Win"
        }
        if(user_move=="Scissor" && comp_move=="Rock"){
            return "Lose"
        }
        if(user_move=="Scissor" && comp_move=="Paper"){
            return "Win"
        }
        if(user_move=="Scissor" && comp_move=="Scissor"){
            return "Draw"
        }
        if(user_move=="Rock" && comp_move=="Rock"){
            return "Draw"
        }
        if(user_move=="Paper" && comp_move=="Paper"){
            return "Draw"
        }
    }

    document.getElementById("play-button").onclick = () => {
        no=randomNumber(0,2)
        move=['Rock','Paper','Scissor']
        comp_move=move[no]
        comp_move_img=['rock.png','paper.png','scissor.png']
        user_move=document.querySelector('input[name=options]:checked').value
        document.getElementById("result").innerHTML=rulebook(user_move,comp_move)
        document.getElementById("comp-image").src=comp_move_img[no]
    }

}