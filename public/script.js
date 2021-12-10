axios.get('/user')
  .then(res => {
    const user = res.data
    console.log(user)
    document.getElementById('user').innerHTML = `
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.username}</p>
      <p>${user.phone}</p>
      <p>${user.address}</p>
    `
  })
  .catch(err => console.error(err))


