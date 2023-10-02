$(document).ready(function () {
    AOS.init()
})
$(window).on("resize", function() {
    AOS.refresh()
})

$(".data-data p, .data-data .line-right, .data-data .data,.data-data .data-all, .data-data .bacajuga").attr({ "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "300","data-aos-offset": "20", "data-aos-easing": "linear" })

$(".data-data .thumb").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "500", "data-aos-duration": "300","data-aos-offset": "20", "data-aos-easing": "linear" })