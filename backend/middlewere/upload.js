import moment from 'moment';
import multer from 'multer';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        cb(null, `${date}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' ) {
        cb(null, true);
    } else {
        cd(null, false);
    }
};

const limits = {
    fileSize: 1024 * 1024 * 5,
};

const upload = multer({ storage, fileFilter, limits });

export default upload;
