  function headingParagraphElement() {
      var headingElement = document.createElement('h1');
      var paragraphElement = document.createElement('p');

      headingElement.innerHTML = "This is heading tag.";
      paragraphElement.innerHTML = "This is paragraph tag."

      document.getElementById('div').appendChild(headingElement);
      document.getElementById('div').appendChild(paragraphElement);
  }

  document.getElementById('btn').onclick = function () {
       headingParagraphElement();
  }