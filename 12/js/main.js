import { addPictures } from './thumbnails.js';
import { uploadPhoto } from './user-form.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';

getData(addPictures, showAlert);
uploadPhoto();