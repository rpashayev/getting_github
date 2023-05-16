async function getUserData(e){
    e.preventDefault()
    var response = await fetch(`https://api.github.com/users/${user.value}`)
    var userData = await response.json()
    console.log(userData.avatar_url)

    user.value = ""
    users.innerHTML = `
        <div>
            <h2>Name: ${userData.name}</h2>
            <img src="${userData.avatar_url}" alt="avatar" class="rounded-circle img-fluid w-25">
        </div>
        ${users.innerHTML}
    `
}