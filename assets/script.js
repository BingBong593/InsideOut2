document.getElementById('show-details').addEventListener('click', () => {
    fetch('https://api.themoviedb.org/3/movie/inside-out?api_key=TU_API_KEY')
        .then(response => response.json())
        .then(data => {
            const details = `
                <h2>${data.title}</h2>
                <p>${data.overview}</p>
                <p><strong>Fecha de lanzamiento:</strong> ${data.release_date}</p>
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
            `;
            document.getElementById('movie-details').innerHTML = details;
        })
        .catch(error => console.error('Error:', error));
});


