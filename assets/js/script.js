const tooltips = document.querySelectorAll('.tt')
  tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
  })
  // footer
  document.querySelector("#currentYear").innerHTML = new Date().getFullYear();
  // modal
  let span = document.querySelectorAll('.projectImageModal');
  span.forEach((i) => {
    i.addEventListener('click', function(){
      let id = i.dataset.projectId
      let project = i.dataset.projectName
      document.getElementById("project-name").innerHTML = project;

      let images = JSON.parse(i.dataset.images);
  
      let text = ""
      if (images.length > 0) {
        for (let j = 0; j < images.length; j++) {

          if (j == 0) {
          text += `
          <div class="carousel-item active">
              <img src="`+ window.location.href +`assets/project-${id}/`+ images[j]['path'] +`" alt="...">
          </div>
          `
          } 
          else {
          text += `
          <div class="carousel-item">
              <img src="`+ window.location.href +`assets/project-${id}/`+ images[j]['path'] +`" alt="...">
          </div>
          `
          }
        }
    
      }
      else {
        text = `
          <div class="carousel-item active">
          <img src="`+ window.location.href +`assets/images/project-default.png" alt="...">
          </div>
        `
      }
    
      document.getElementById("carousel-inner").innerHTML = text;

      var buttons = ""
      if (images.length > 1) {
      buttons = `
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      `
      }
      document.getElementById("carousel-buttons").innerHTML = buttons

    });
  });