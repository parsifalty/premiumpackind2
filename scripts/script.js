var link = document.querySelector('link[rel=import]');
      var content = link.import.querySelector('#intro-dm');
      document.body.appendChild(content.cloneNode(true));