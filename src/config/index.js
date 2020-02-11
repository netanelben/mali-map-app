const BASE_API_URLS = {
    PROD: 'http://legislation-securite-interieure.ne',
    DEV: 'http://localhost:4000'
};

const BASE_API_URL = `${BASE_API_URLS.PROD}/api`;
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dfoj36sbh/image/upload';
const CLOUDINARY_V = 'v1575824550';
const CLOUDINARY_PDF_PATH = 'law_finder/PDF';

const TUTROIAL_VIDEO_URL = 'https://www.youtube.com/embed/giLZJZZk7W4?autoplay=1';
const TUTROIAL_PDF_URL = 'https://drive.google.com/a/geoacenter.com/file/d/1inHziFokchbb64nHK7uMnHspVimQ1B6B/view?usp=sharing';

const CHART_URLS = [
    'https://cloud.highcharts.com/embed/CJjjikG-/',
    'https://cloud.highcharts.com/embed/Kd1rIjKt/'
];

export {
    TUTROIAL_VIDEO_URL,
    TUTROIAL_PDF_URL,
    BASE_API_URL,
    CLOUDINARY_BASE_URL,
    CLOUDINARY_V,
    CLOUDINARY_PDF_PATH,
    CHART_URLS
};
