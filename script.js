fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
        let html = ``
        data.forEach(elem => {
            if (elem) {
                html += `
                <div class="col-3 mb-4">
                    <div class="card">
                        <img src="${elem.url}" class="card-img-top card-img1" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">IMG ID:${elem.id}</h5>
                            <p class="card-text">${elem.title}</p>
                            <a href="${elem.thumbnailUrl}" class="btn btn-primary">IMG LINK</a>
                        </div>
                    </div>
                </div>`
            }
        });
        document.querySelector('.card-img-data').innerHTML = html
    }).catch((err) => {
        console.log(err)
    })