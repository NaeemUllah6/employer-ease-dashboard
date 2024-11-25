$(document).ready(function () {
  $("#right-arrow").click(function () {
    $(".dashbord-1").removeClass("show");
  });

  $("#nav-toggler").click(function () {
    $(".dashbord-1").addClass("show");
  });

  $(".decreament-btn").click(function () {
    var value = $("#temperature").val();
    value--;
    $("#temperature").val(value);
  });

  $(".increament-btn").click(function () {
    var value = $("#temperature").val();
    value++;
    $("#temperature").val(value);
  });

  $("a.sub-menu-active").closest(".accordion-item").find(".accordion-button").addClass("accordion_button-active");
});

/////////////////////////////input to get the file input///////////////////////////////////


const fileButton = document.getElementById('fileButton');
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');


fileButton.addEventListener('click', (event) => {
  event.preventDefault();
  fileInput.click();
});


fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];


    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.classList.remove('d-none');
      };
      reader.readAsDataURL(file);
    } else {
      preview.classList.add('d-none');
      alert('Error! Only the image file type is supported');
    }
  }
});