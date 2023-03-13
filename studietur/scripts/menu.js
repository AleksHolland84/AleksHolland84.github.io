var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active2");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function showChapterHeaders() {
  // Get all the <h2> elements in the document
  const chapters = document.getElementsByClassName("__chapter_menu_container");

  // Create an empty array to hold the header text
  const headerData = [];

  // Loop through each header element and extract the text
  for (let i = 0; i < chapters.length; i++) {
    const headerText = chapters[i].textContent;
    const headerId = chapters[i].id;
    headerData.push({ text: headerText, id: headerId, number: i +1 });
  }

  // Create a template for displaying the header text
  const template = `<h2>Indholdsfortegnelse:</h2>
  <ul>
      ${headerData.map(data => `<a href="#${data.id}">${data.text}</a><br><br>`).join("")}
    </ul>
  `;

  // Insert the template into the document
  const container = document.getElementById("chapter-headers-container");
  container.innerHTML = template;
}
