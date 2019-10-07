window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Slider

    class Slider{
        constructor(container = '.slider'){
            this._sliderIndex = 1;
            this._container = document.querySelector(container);
            this._slides = this._container.querySelectorAll('.slider-item');
            this._prev = this._container.querySelector('.prev');
            this._next = this._container.querySelector('.next');
            this._dotsWrap = this._container.querySelector('.slider-dots');
            this._dots = this._container.querySelectorAll('.dot');
        }

        _showSliders(inedexShowSlider){
            if (inedexShowSlider > this._slides.length) {
                this._sliderIndex = 1;
            }
            if (inedexShowSlider < 1) {
                this._sliderIndex = this._slides.length;
            }

            this._slides.forEach((item) => item.style.display = 'none');
            this._dots.forEach((item) => item.classList.remove('dot-active'));

            this._slides[this._sliderIndex - 1].style.display = 'block';
            this._dots[this._sliderIndex - 1].classList.add('dot-active');
        }

        _chosseSlider(changeIndex){
            this._showSliders(this._sliderIndex += changeIndex);
        }

        _setSlider(currentIndex){
            this._showSliders(this._sliderIndex = currentIndex);
        }

        _setShowInteravaSlider(interval){
            if(interval > 0){
                setInterval(() => this._chosseSlider(1), interval);
            }
        }

        apply(firstSlider = 1, intevral = 0){
            this._prev.addEventListener('click', () => this._chosseSlider(-1));
            this._next.addEventListener('click', () => this._chosseSlider(1));
            this._dotsWrap.addEventListener('click', (event) => {
                    for (let i = 0; i < this._dots.length + 1; i++) {
                        if (event.target.classList.contains('dot') && 
                                    event.target == this._dots[i-1]) {
                            this._setSlider(i);
                        }
                    }
                });
            
            this._sliderIndex = firstSlider;
            this._showSliders(firstSlider);

            this._setShowInteravaSlider(intevral);
        }
    }

    new Slider('.slider').apply(1, 10000);
});