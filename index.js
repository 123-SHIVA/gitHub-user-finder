

var form=document.getElementById('myForm')

form.addEventListener('submit',function(e){
    e.preventDefault()
    var search=document.getElementById('search').value

    var originalName=search.split(' ').join('')

    alert(originalName)

    fetch('https://api.github.com/users/'+ originalName).then((result)=>result.json()).then((data)=>{
        console.log(data)

        // ek kaam kru kya bs do min lagega please

        document.getElementById('img').innerHTML=`<img src=${data.avatar_url}/>`
        
        document.getElementById("name").innerHTML=`Name:${data.login}`
        document.getElementById('location').innerHTML=`Location:${data.location}`
        document.getElementById('follower').innerHTML=`Follower:${data.followers}`
        document.getElementById('portfolio').innerHTML=`portfolio:<a href="${data.portfolio}/>"`
        document.getElementById('public repos').innerHTML=`Public Repos:${data.public_repos }`
        document.getElementById('bio').innerHTML=data.bio;

        document.querySelector('.edit').style.padding="10px";

    })



})