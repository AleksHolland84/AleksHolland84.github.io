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
  const subChapters = document.getElementsByClassName("__chapter_menu_subheader_1");

  // Create an empty array to hold the header text
  const headerData = [];
  const subHeaderData = [];

  // Loop through each header element and extract the text
  for (let i = 0; i < chapters.length; i++) {
    chapters[i].classList.add("anchor"); // add anchor class
    const headerText = chapters[i].textContent;
    const headerId = chapters[i].id;
    headerData.push({ text: headerText, id: headerId, number: i +1 });
  }

  for (let i = 0; i < subChapters.length; i++) {
    subChapters[i].classList.add("anchor"); // add anchor class 
    const subHeaderText = subChapters[i].textContent;
    const subHeaderId = subChapters[i].id;
    subHeaderData.push({ text: subHeaderText, id: subHeaderId, number: i +1 });
  }

  // Create a template for displaying the header text
  const template = `<h2>Indholdsfortegnelse:</h2>
  <ul>
      ${headerData.map(data => `<a href="#${data.id}">${data.text}</a><br><br>`).join("")}
    </ul>
  `;

  // Create a template for displaying the header but also wit subheaders
  const template_sub = `<h2>Indholdsfortegnelse:</h2>
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

  // Change from template to template_sub to get subheaders
  container.innerHTML = template_sub;
}