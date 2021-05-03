let boxs = document.getElementsByClassName('box')

let elementDeplacable = document.getElementsByClassName('element')

for(let y = 1; y <= elementDeplacable.length; y++){

    let key = 'el' + y

    elementDeplacable[key].addEventListener('dragstart', function (event){

        event.dataTransfer.setData("text", event.target.id)

        setTimeout(() => { 
            elementDeplacable[key].classList.add('hidden')
        })
    })

    elementDeplacable[key].addEventListener('dragend', function (){

        setTimeout(() => {
            elementDeplacable[key].classList.remove('hidden')
        })
    })
}

for(let i = 0; i < boxs.length; i++){

    boxs[i].addEventListener('dragenter', function (){
        boxs[i].style.border = '2px dashed black'
    })

    boxs[i].addEventListener('dragover', function (event){

        event.preventDefault()
        boxs[i].style.border = '2px dashed black'
    })

    boxs[i].addEventListener('dragleave', function (){

        boxs[i].style.border = '2px solid black'
    })

    boxs[i].addEventListener('drop', function (event){

        event.preventDefault()

        let data = event.dataTransfer.getData("text");
        let dropElement = document.getElementById(data);
        
        document.getElementById(data).parentNode.removeChild(document.getElementById(data));
        boxs[i].appendChild(dropElement);
        document.getElementById(data).classList.remove('hidden');
    })

}