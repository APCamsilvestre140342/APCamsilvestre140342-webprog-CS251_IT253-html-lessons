function myFunction() {
  let demo = document.getElementById("demo");

  if (demo.innerHTML === "A Paragraph.") {
    demo.innerHTML = "Paragraph changed.";
  } else {
    demo.innerHTML = "A Paragraph.";
  }
}