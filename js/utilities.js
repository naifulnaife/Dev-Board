//couting task
function countingTask(event){
        
        
        
    
        let taskNumber = document.getElementById("task-num");
        let taskCount = document.getElementById("task-count");
        let convertedNumber = parseInt(taskNumber.innerText);
        let convertedCount = parseInt(taskCount.innerText);

        alert("Board updated successfully");
        if (convertedNumber === 1) { 
            alert("Congrats!!!You have completed all the current tasks");
        }
        
        if(!isNaN(convertedNumber) && !isNaN(convertedCount)){
            taskNumber.innerText = convertedNumber - 1;
            taskCount.innerText = convertedCount + 1;
        }

        //Activity-Log section

        
        let newdiv = document.createElement("div");

        newdiv.innerHTML = `
            <div class="text-[10px] bg-[#F4F7FF] p-2 rounded-lg my-2">
            You have completed the task ${new Date().toLocaleString()}
        </div>
        `;


        let parentElement = document.getElementById("task-section");

        parentElement.appendChild(newdiv);
    

        //button desabled
        let btn = event.target;
        btn.disabled = true;
        btn.style.backgroundColor = '#A1B9FF';
        btn.style.cursor = 'not-allowed';
    }



        document.querySelectorAll(".btn-task").forEach(button => {
            button.addEventListener("click",countingTask);
        });

     //bg-color changing

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF", "#33FFFF", "#F1C40F", "#9B59B6"];

       
function changeBackgroundColor(){
    
    const randomColor=colors[Math.floor(Math.random()*colors.length)];

    
    document.body.style.backgroundColor = randomColor;
}

document.getElementById("colorIcon").addEventListener("click", changeBackgroundColor);   
        


//update date-time

function updateDateTime() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${day} ,<br><strong>${month} ${date} ${year}</strong>`;
    document.getElementById("datetime").innerHTML = formattedDate;
}
updateDateTime();

// Function to delete all created divs inside #task-section
function clearTaskLogs() {
    document.getElementById("task-section").innerHTML = ""; // Removes all added logs
}

// Attach event listener to the delete button
document.getElementById("clear-btn").addEventListener("click", clearTaskLogs);


