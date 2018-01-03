window.onload = function() {
    var sendButton = document.getElementById("publication");
    var thinkInput = document.getElementById("mind");
    var timeLine = document.getElementById("publicaciones");

    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            alert("complete");

        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "juanita";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }


}