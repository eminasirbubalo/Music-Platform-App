//prevents form from reloading page
$("#searchBar").keypress(function (e) {
  if (e.which == 13)
    return false;
});

var searchQuery = document.getElementById("searchInput");
document.querySelector('#searchBar').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    localStorage.setItem("searchQuery", searchQuery.value);
    window.location.replace("search.html");
  }
});

var searchParam = localStorage.getItem("searchQuery");
$.ajax({
    type: "GET",
    url: ' rest/song/search/' + searchParam,
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
        var html = "";
        for (let i = 0; i < data.length; i++) {
            html += `<button type="button" class="pb-4 list-group-item list-group-item-action bg-transparent"
                    aria-current="true" style="color: white;">
                    <div class="row mt-3">
                        <div class="col-1">
                            <img class="search-cover" src="`+ data[i].cover + `.jpg" alt="Card image"
                                height="90px" width="90px">
                        </div>
                        <div class="col-9 ms-5" style="font-size: 25px; padding: 10px 0;">
                            `+ data[i].title + `<br>
                            <div style="font-size: 15px; color: gray;">
                            `+ data[i].duration + `
                            </div>
                        </div>
                    </div>
                </button>`;
            $("#searchList").html(html);
        }
    }
});