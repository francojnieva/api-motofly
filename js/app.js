
const url = 'https://motofly-deploy-app.onrender.com'

const cardContainer = document.getElementById('card-container')

const aboutUsData =  fetch(`${url}/api/about-us`)
                    .then(response => response.json())
                    // .then(response => console.log(response))
                    .then((data) => {
                        data.forEach((item) => {
                          const card = document.createElement('div')
                          card.classList.add('card')
                    
                          const name = document.createElement('h2')
                          name.textContent = item.name
                    
                          const description = document.createElement('p')
                          description.textContent = item.description
                    
                          card.appendChild(name)
                          card.appendChild(description)
                    
                          cardContainer.appendChild(card)
                        })
                    })
                    .catch((error) => {
                        console.error('Hubo un problema con la solicitud fetch:', error);
                    })
                    
                