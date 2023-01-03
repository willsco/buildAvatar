(function (w) {
  var doc = w.document;
  var signature = doc.querySelector('#signature_container');
  var assdown = doc.querySelector('#btnSave');
  var withphoto = doc.querySelector('input[name=checkbox]');
  var uploadfield = doc.querySelector('.upload-field');
  var withoutphoto = doc.querySelector('.without-photo');
  var name = doc.querySelector('.preparedName');
  var des_branch = doc.querySelector('#des-branch');

  var inputs = doc.querySelectorAll('form .form-control');

  for (var i = inputs.length - 1; i >= 0; i--) {
    inputs[i].addEventListener('keyup', updateSignature);
  }

  function updateSignature(e) {
    var id = e.target.id;
    var value = e.target.value;
    var element = doc.querySelector('.' + id);
    element.innerHTML = value;
  }
  window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
      if (this.files && this.files[0]) {
        let img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]);
      }
    });
  });

  withphoto.addEventListener('change', function () {
    if (this.checked) {
      uploadfield.style.display = 'flex';
      withoutphoto.style.display = 'none';
      name.classList.remove("without-photo-title");
      name.classList.remove("without-photo-subtitle");
    } else {
      uploadfield.style.display = 'none';
      withoutphoto.style.display = 'flex';
      name.classList.add("without-photo-title");
      des_branch.classList.add("without-photo-subtitle");
    }
  });

  assdown.addEventListener("mouseover", function canvasGen() {
    html2canvas(signature, { letterRendering: 1, allowTaint: true, useCORS: true }).then(function (canvas) {
      assdown.href = canvas.toDataURL("image/png");
    });
  });
})(window);