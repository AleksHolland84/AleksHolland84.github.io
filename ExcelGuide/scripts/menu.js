var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
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

// AUTOMATIC TABLE OF CONTENT CREATER
function showChapterHeaders() {
  // Get all the class elements in the document with the "__chapter_menu_header_1" class tag
  const chapters = document.getElementsByClassName("__chapter_menu_header_1");
  const subChapters = document.getElementsByClassName("__chapter_menu_subheader_1");

  // Create an empty array to hold the header text
  const headerData = [];
  const subHeaderData = [];

  // Loop through each header element and extract the text
  for (let i = 0; i < chapters.length; i++) {
    const headerText = chapters[i].textContent;
    const headerId = chapters[i].id;
    headerData.push({ text: headerText, id: headerId, number: i +1 });
  }

  for (let i = 0; i < subChapters.length; i++) {
    const subHeaderText = subChapters[i].textContent;
    const subHeaderId = subChapters[i].id;
    subHeaderData.push({ text: subHeaderText, id: subHeaderId, number: i +1 });
  }

  // Create a template for displaying the header text for the cTable of Content
  const template = `<h2>Indholdsfortegnelse:</h2>
  <ul>
      ${headerData.map(data => `
          <a href="#${data.id}">${data.text}</a>
          <ul>
              ${subHeaderData.filter(subData => subData.id.startsWith(data.id)).map(subData => `
                  <a href="#${subData.id}">${subData.text}<br></a>
              `).join("")}
          </ul>
          <br>`).join("")}
  </ul>`;

  // Insert the template into the document
  const container = document.getElementById("chapter-headers-container");
  container.innerHTML = template;
}
