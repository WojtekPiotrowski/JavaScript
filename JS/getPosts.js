const postsurl = `https://jsonplaceholder.typicode.com/posts`
const postsWithBlog = document.getElementById('postsWithBlog')
const listed = document.getElementsByClassName('listed')
const postsbtn = document.getElementById('postsbtn')
postsbtn.addEventListener("click" , getPost)

function getPost(){
    postsWithBlog.innerHTML = ''
    fetch(postsurl)
        .then(res => res.json())
        .then(res => {
            for (let i of res){
                let h3 = document.createElement('h3')
                let paragraf = document.createElement('p')
                let hr = document.createElement('hr')
                paragraf.setAttribute("class", "main-paragraf")
                paragraf.onclick = () => {aa(i)}
                h3.setAttribute("class","main-h3")
                h3.innerText = i.title
                paragraf.innerText = i.body
                postsWithBlog.appendChild(h3)
                postsWithBlog.appendChild(paragraf)
                postsWithBlog.appendChild(hr)
            }
        })
    }

    function aa(post) {
        console.log(post)
    }