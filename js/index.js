// Fix for counterUp2 module not available in global scope
const counterUp = window.counterUp.default;

$(document).ready(function () {
    $('.statBox h3 span').each(function () {
        var el = this;
        var waypoint = new Waypoint({
            element: el,
            handler: function () {
                counterUp(el, {
                    duration: 1500,
                    delay: 10
                });
                this.destroy(); // run only once
            },
            offset: 'bottom-in-view'
        });
    });

    $('.testimonialSlider').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoPlay: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 1,
                nav: false
            },
            770: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        },
    });
    $('.testimonialSlider .owl-next').html('<i class="fa-solid fa-arrow-right"></i>');
    $('.testimonialSlider .owl-prev').html('<i class="fa-solid fa-arrow-left"></i>');
    $('.ourPartners').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoPlay: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            576: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });

    function checkTimelinePosition() {
        const windowHeight = $(window).height();
        const windowCenter = $(window).scrollTop() + windowHeight / 2;

        let activeStep = null;
        let minDistance = Infinity;

        $('.timeline-step').each(function () {
            const $step = $(this);
            const stepTop = $step.offset().top;
            const stepHeight = $step.outerHeight();
            const stepCenter = stepTop + stepHeight / 2;

            // Calculate distance from window center
            const distance = Math.abs(windowCenter - stepCenter);

            // Find the closest step to center
            if (distance < minDistance) {
                minDistance = distance;
                activeStep = $step;
            }
        });

        // Remove active class from all steps
        $('.timeline-step').removeClass('active');

        // Add active class to closest step (if within reasonable distance)
        if (activeStep && minDistance < 300) {
            activeStep.addClass('active');
        }
    }

    // Check position on scroll
    $(window).on('scroll', function () {
        checkTimelinePosition();
    });

    // Initial check on page load
    checkTimelinePosition();


    $('.hamburger').click(function () {
        $('.nav').slideToggle();
        $('nav').toggleClass('active');
    });



    const phrases = [
        'Beauty Brand',
        'Ayurvedic brand',
        'Luxury brand',
        'Home decor brand',
        'Sports brand',
        'Skincare brand',
        'Organic cosmetics',
        'Wellness brand',
        'Fragrance label',
        'Haircare brand',
        'Makeup label',
        'Selfcare brand',
        'Eco-friendly brand',
        'Handmade goods',
        'Subscription box'
    ];

    let index = 0;
    const brandEl = document.getElementById('brand');

    function changeText() {
        brandEl.classList.remove('rotating-text');
        void brandEl.offsetWidth; // trigger reflow
        index = (index + 1) % phrases.length;
        brandEl.textContent = phrases[index];
        brandEl.classList.add('rotating-text');
    }

    setInterval(changeText, 1500);


    // chart
    function createLineChart(canvasId, labels, dataPoints, highlightIndex) {
        new Chart(document.getElementById(canvasId), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    data: dataPoints,
                    borderColor: '#f0f0ff',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#5B7BFE',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: function (context) {
                        return context.dataIndex === highlightIndex ? 6 : 0;
                    }
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false } },
                    y: { display: false }
                }
            }
        });
    }

    // Chart 1
    createLineChart("chart1",
        ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'],
        [10, 12, 15, 25, 30, 32, 35], 4
    );

    // Chart 2
    createLineChart("chart2",
        ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'],
        [10, 22, 2, 68, 15, 5, 11], 4
    );

    // Chart 3 (Years)
    createLineChart("chart3",
        ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        [20, 15, 30, 15, 5, 7, 90], 6
    );

    // image flip




    const $ourMission = $('.ourMissionAndVision');
    const $images = $ourMission.find('img');

    const imageSets = [
        [
            'images/mission1.png',
            'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80'
        ],
        [
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&q=80',
            'images/mission2.png',
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
        ],
        [
            'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
            'images/mission3.png',
            'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80'
        ],
        [
            'images/mission1.png',
            'images/mission2.png',
            'images/mission3.png',
            'images/mission4.png',
            'images/metaLogo.png'
        ],

    ];

    let currentSetIndex = 0;
    let isAnimating = false;

    function changeImages(setIndex) {
        if (isAnimating) return;
        isAnimating = true;

        $images.each(function (idx, img) {
            const $img = $(img);
            $img.addClass('flip-animation');

            setTimeout(() => {
                $img.attr('src', imageSets[setIndex][idx]);
            }, 750);

            $img.on('animationend', function handler() {
                $img.removeClass('flip-animation');
                $img.off('animationend', handler);
            });
        });

        setTimeout(() => {
            isAnimating = false;
        }, 1500);
    }

    // Flip every 1 second in a loop
    setInterval(() => {
        changeImages(currentSetIndex);
        currentSetIndex = (currentSetIndex + 1) % imageSets.length;
    }, 2000); // or more than 1500ms



    var $section = $('.whyUsSec');
    if ($(window).width() > 991) {
        $('.whyUsCards').each(function () {
            var $front = $(this).find('.card-front');
            var $back = $(this).find('.card-back');

            // Set initial padding-bottom to front height
            $section.css('padding-bottom', $front.outerHeight());

        });
    }


    function adjustWhyUsHeight() {
        if ($(window).width() < 991) {
            var cardHeight = $('.card-front').outerHeight(); // get height
            $('.whyUsCards').height(cardHeight); // set height
        } else {
            $('.whyUsCards').css('height', ''); // reset
        }
    }

    // Run on page load
    adjustWhyUsHeight();

    // Run on window resize
    $(window).resize(function () {
        adjustWhyUsHeight();
    });
});
$(window).on('load', function () {
    adjustWhyUsHeight();
});
