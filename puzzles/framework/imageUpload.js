const axios = require("axios");
// const fs = require('fs');
// const path = require('path');

class ImageUpload {
    uploadButtonClick() {
        const uploadButton = document.querySelector('#uploadButton');

        uploadButton.onclick = () => {
            const uploadFrame = document.querySelector('.upload-frame');
            uploadFrame.classList.remove('none-display');
        }
    }

    closeButtonClick() {
        const uploadCloseButton = document.querySelector('#uploadCloseButton');

        uploadCloseButton.onclick = () => {
            const uploadFrame = document.querySelector('.upload-frame');
            uploadFrame.classList.add('none-display');
        }
    }

    async fileChoose() {
        const choiceImageButton = document.querySelector('#choiceImageButton');
        const fileInput = document.getElementById('fileInput');

        choiceImageButton.onclick = () => {
            fileInput.click();
        }

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                this.getFile(file);
            }
        });
    }


    async getFile(file) {
        const formData = new FormData();
        formData.append('file', file); // добавляем файл в форму

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Файл успешно загружен', response.data);
        } catch (error) {
            console.error('Ошибка при загрузке файла:', error.message);
        }
    }
}

module.exports = new ImageUpload;