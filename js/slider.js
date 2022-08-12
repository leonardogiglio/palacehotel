
const propSlider = {
    slider: document.getElementById('slider'),
    primerSlide: null,
}

const metSlider = {
    inicio: function(){
        setInterval(metSlider.moverSlide, 4000);
    },
    moverSlide: function(){
        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-105.6%';

        setTimeout(function(){
            propSlider.primerSlide = propSlider.slider.firstElementChild;

            propSlider.slider.appendChild(propSlider.primerSlide);

            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = '-43%';

        },1000);
    }
}

metSlider.inicio();