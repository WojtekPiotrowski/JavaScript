const todosurl = `https://jsonplaceholder.typicode.com/todos`
const todosWithBlog = document.getElementById('todosWithBlog')
const todosbtn = document.getElementById('todosbtn')
todosbtn.addEventListener("click" , getTodo)

function getTodo(){
    todosWithBlog.innerHTML = ''
    fetch(todosurl)
        .then(res => res.json())
        .then(res => {
            for (let i of res){
                // let h3 = document.createElement('h3')
                // let paragraf = document.createElement('p')
                // let hr = document.createElement('hr')
                // paragraf.setAttribute("class", "main-paragraf")
                // paragraf.onclick = () => {aa(i)}
                // h3.setAttribute("class","main-h3")
                // h3.innerText = i.title
                // paragraf.innerText = i.completed
                // todosWithBlog.appendChild(h3)
                // todosWithBlog.appendChild(paragraf)
                // todosWithBlog.appendChild(hr)
                let details = document.createElement('details')
                let summary = document.createElement('summary')
                let span = document.createElement('span')
                span.innerText = i.completed ? "Wykonane" : "Nie wykonane"
                summary.innerText = i.title
                span.onclick = () => {aa(i)}
                details.appendChild(summary)
                details.appendChild(span)
                todosWithBlog.appendChild(details)

            }
        })
    }

    function aa(todo) {
        console.log(todo)
    }