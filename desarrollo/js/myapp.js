


        $(document).ready(function () {
          AOS.init();
            $('.navTrigger').click(function () {
                $(this).toggleClass('active');
                console.log("Clicked menu");
                $("#mainListDiv").toggleClass("show_list");
                $("#mainListDiv").fadeIn();

            });
            $(window).scroll(function () {
                if ($(document).scrollTop() > 50) {
                    $('.nav').addClass('nav-fix');
                    console.log("OK");
                } else {
                    $('.nav').removeClass('nav-fix');
                }
            });


        })

