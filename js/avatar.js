const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarInput = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__avatar');
const adPhoto = document.querySelector('.ad-form__photo');
const adPhotoInput = document.querySelector('.ad-form__upload input[type=file]');
const adPhotoPreviewTemplate = document.querySelector('#ad-photo__template').content.querySelector('.ad-photo__preview');

const appendImage = function (fileChooser, preview) {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

const avatarChangeHandler = function () {
  appendImage(avatarInput, avatarPreview);
};

const imageUploadHandler = function () {
  const adPhotoPreview = adPhotoPreviewTemplate.cloneNode(true);

  appendImage(adPhotoInput, adPhotoPreview);
  adPhoto.appendChild(adPhotoPreview);
}

avatarInput.addEventListener('change', avatarChangeHandler);
adPhotoInput.addEventListener('change', imageUploadHandler);
