let show = (posts, page) => {
    let output = "";
    let state = {
        querySet: posts,
        page: page,
        rows: 10,
    };
    var data = pagination(state.querySet, state.page, state.rows);

    for (let post of data.querySet) {
        output += `<tr><th scope="row">${post.id}</th><td>${post.title}</td><td>${post.body}</td></tr>`;
    }
    document.querySelector("tbody").innerHTML = output;
    document.getElementById(
        "thead"
    ).innerHTML = `<th scope="col">#</th> <th scope="col">Title</th> <th scope="col">Body</th>`;
    pageButtons(data.pages);
};

async function getData(p) {
    try {
        const response = await fetch("http://localhost:3333/request/posts");
        const data = await response.json();
        show(data, p);
    } catch (error) {
        console.log(error);
    }
}
getData(1);

//Paginação
function pagination(querySet, page, rows) {
    let trimStart = (page - 1) * rows;
    let trimEnd = trimStart + rows;

    let trimmedData = querySet.slice(trimStart, trimEnd);

    var pages = Math.round(querySet.length / rows);

    return {
        querySet: trimmedData,
        pages: pages,
    };
}

function pageButtons(pages) {
    let wrapper = document.getElementById("pagination-wrapper");
    wrapper.innerHTML = "";

    for (let page = 1; page <= pages; page++) {
        wrapper.innerHTML += `<button value="${page}" onclick="buttonLogic(${page})" class="page btn btn-sm btn-light" style="margin-left:2px">${page}</button>`;
    }
}
function buttonLogic(pageIndex) {
    getData(pageIndex);
}
