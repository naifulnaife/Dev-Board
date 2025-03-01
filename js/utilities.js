function countingTask(event){
    
        let taskNumber = document.getElementById("task-num");
        let taskCount = document.getElementById("task-count");
        let convertedNumber = parseInt(taskNumber.innerText);
        let convertedCount = parseInt(taskCount.innerText);
        
        if(!isNaN(convertedNumber) && !isNaN(convertedCount)){
            taskNumber.innerText = convertedNumber - 1;
            taskCount.innerText = convertedCount + 1;
        }
        let btn = event.target;
        btn.disabled = true;
        btn.style.backgroundColor = '#A1B9FF';
        btn.style.cursor = 'not-allowed';
}

        document.querySelectorAll(".btn-task").forEach(button => {
            button.addEventListener("click",countingTask);
        });

        const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF", "#33FFFF", "#F1C40F", "#9B59B6"];

       
        function changeBackgroundColor(){
            
            const randomColor=colors[Math.floor(Math.random()*colors.length)];

            
            document.body.style.backgroundColor = randomColor;
        }

        document.getElementById("colorIcon").addEventListener("click", changeBackgroundColor);
        