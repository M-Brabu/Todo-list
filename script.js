
                    function todo(){ 
                        var input=document.getElementById("input") 
                        var inputv=input.value
                        if(inputv==""){
                            alert("please enter an task before submitting!!!")
                            return
                        }
                        input.value=""
                         var task=document.getElementById("task") 
                         var tasker=`<center><fieldset style="border-radius:20px;padding:5px;width:fit-content;box-shadow:0 0 20px green; background-color:rgb(89,255,0);"><center><h1>${inputv}</h1><button id='btn-done' class='btn btn-warning' onclick='doner(event)'>done</button><button onclick='undoer(event)' class='btn btn-info'>Un-DO</button><button onclick='deleter(event)' class="btn btn-danger" id="btn-delete">delete</button></center></fieldset><center><br>` 
                         task.innerHTML=task.innerHTML+tasker 
                         }
                        function doner(event){ 
                            var header=event.target.parentElement.querySelector("h1") 
                            header.style.textDecoration="line-through" }
                        function deleter(event){ 
                            var fieldset=event.target.closest("fieldset") 
                            fieldset.remove()
                         }
                         function undoer(event){
                            var header=event.target.parentElement.querySelector("h1") 
                            header.style.textDecoration="" 
                         } 

    