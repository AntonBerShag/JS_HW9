window.onload = function () {
    var myList = document.getElementById("myList");
    var listItems = myList.getElementsByTagName("li");

    for (var i = 0; i < listItems.length; i++) {
        var item = listItems[i];
        var text = item.textContent;

        if (text.startsWith("http://") || text.startsWith("https://")) {
            var link = document.createElement("a");
            link.href = text;
            link.textContent = text;
            item.textContent = "";
            item.appendChild(link);
        }
    }
};

