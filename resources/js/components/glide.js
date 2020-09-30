export default {
    product_image_slider: '',
    product_image_thumbnails: '',

    init() {
        const productSlider = document.querySelector('.product-image-slider');
        if(productSlider) {
            this.loadGlide();           
        }
    },

    initProductImageSlider() {

        if(document.querySelector('.product-image-large')) {
            this.product_image_slider = new Glide.default('.product-image-large', {
                type: 'carousel'
            }).mount();
        }

        if(document.querySelector('.product-image-large')) {
            this.product_image_thumbnails = new Glide.default('.product-image-thumbnails', {
                type: 'carousel',
                perView: 3
            }).mount();
            
            document.addEventListener('click', (event) => {
                if(!event.target.classList.contains('glide__image')) {
                    return;
                }
    
                this.product_image_slider.go('=' + event.target.dataset.index);
    
            }, false)
        }

    },

    async loadGlide() {
        window.Glide = await import('@glidejs/glide');

        // @todo: Make this a utility
        const head  = document.getElementsByTagName('head')[0];
        const link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href =  window.theme.public_path.split('assets/')[0] + 'assets/glide.css?v=3';
        link.media = 'all';
        link.importance = 'low'
        head.appendChild(link);


        this.initProductImageSlider();
    }

}