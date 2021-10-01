
$(document).ready(function(){
    $('.diplomas-images').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 1170,
                settings:{
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 979,
                settings:{
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                } 
            },
            {
                breakpoint: 767,
                settings:{
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                } 
            },
            {
                breakpoint: 479,
                settings:{
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                } 
            }
        ]
    });
    //$('.diplomas-images__box img').on("click",function(e){
        // SrcFile=$( e.target ).attr('src');
        // $('.scale-image').css('display', "flex");
        // $('.scale__img').attr('src', SrcFile);
      //  console.log( SrcFile);
        // $('.diplomas-images__box img').attr('src','./img/letter2.jpg');
        // SrcFile=$('.diplomas-images__box img').attr('src');
        // alert(SrcFile)
        //$('.diplomas-images__box img').attr('src', 'attr(')
        // $('.diplomas-images__box').css("position", "absolute");
        // $('.diplomas-images__box').css("width", "500px")
    //})

    $('.letter-images').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 1170,
                settings:{
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 979,
                settings:{
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                } 
            },
            {
                breakpoint: 767,
                settings:{
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                } 
            },
            {
                breakpoint: 479,
                settings:{
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                } 
            }
        ]
    });
    /////////////Мобильное МЕНЮ\\\\\\\\\\\\\\\\\\\\\\\\\\
    $('.logo__mobile-button').on('click', function(){
        if ($('.container_header').hasClass('new-container_header')){
            ($('.container_header').removeClass('new-container_header'))
        } else {
            ($('.container_header').addClass('new-container_header'))
        }
    })

    //////////////////Калькулятор\\\\\\\\\\\\\\\\\\\\\\\\

    //Скрываем все фреймы, кроме первого
    let numFrame=1, classFrame;
    let countFrame=6;
    let timeA=300; // время анимации
    for (let i=1; i<(countFrame+1); i++){
        nf=`.frame-${i}`;
        $(nf).css('display','none');
    }
    $('.frame-1').css('display','flex');
    $('.calc-right .sidebar .sidebar__box').css('width', `calc((100% / ${countFrame}) * ${numFrame})`);
    ///\\\

        
    // '.frame-1' '.frame-2' '.frame-3' ... - класс элементов фрейма для последующего скрытия\открытия
    $('.button-next').on('click', function(){  ///нажатие кнопки ДАЛЕЕ
        //Анимация  скрытия формы\\\\
        $('.calc-left').fadeTo(timeA, 0, "linear", function(){regenNextForm()}).fadeTo(timeA, 1);
        ///\\\
        function regenNextForm(){
            classFrame=`.frame-${numFrame}`;
            let classNewFrame=`.frame-${numFrame+1}`;
            switch (numFrame) {
                case 1:
                    console.log("case 1");
                    $('.calc-title').html('Количество ваших сотрудников');
                    $('.buttons').css('justify-content', 'space-between');
                    break;
                case 2:
                    console.log("case 2");
                    $('.calc-title').html('Заполните все поля');
                    break;
                case 3:
                    console.log("case 3");
                    $('.calc-title').html('Количество ваших документов');
                    break;
                case 4:
                    console.log("case 4");
                    $('.calc-title').html('Ваш номер телефона');
                    break;
                case 5:
                    console.log("case 5");
                    $('.calc-title').css('display','none');
                    $('.buttons').css('justify-content', 'center');
                    $('.button-next').addClass('button-next_frame6');
                    $('.button-next').text('Заполнить с другими данными');
                    break;
                case 6:
                    console.log("case 6");
                    $('.calc-title').css('display','flex');
                    $('.calc-title').html('Выбирите один из вариантов');
                    $('.button-next').removeClass('button-next_frame6');
                    $('.buttons').css('justify-content', 'center');
                    $('.button-next').text('Далее');       
                    classNewFrame=`.frame-1`;
                    break;
            }
            $(classFrame).css('display','none');
            $(classNewFrame).css('display','flex');
            if (numFrame==countFrame) {numFrame=1} else {numFrame++}
            $('.calc-right .sidebar .sidebar__box').css('width', `calc((100% / ${countFrame}) * ${numFrame})`); //передвигаем ползунок
        }
    })
    $('.button-back').on('click', function(){ ///нажатие кнопки НАЗАД
        //Анимация скрытия формы\\\\
        $('.calc-left').fadeTo(timeA, 0, "linear", function(){regenBackForm()}).fadeTo(timeA, 1);
        ///\\\
        function regenBackForm(){
            classFrame=`.frame-${numFrame}`;
            let classNewFrame=`.frame-${numFrame-1}`;
            switch (numFrame) {
                case 2:
                    console.log("case 2");
                    $('.calc-title').html('Выбирите один из вариантов');
                    $('.buttons').css('justify-content', 'center');
                    break;
                case 3:
                    console.log("case 3");
                    $('.calc-title').html('Количество ваших сотрудников');
                    $('.buttons').css('justify-content', 'space-between');
                    break;
                case 4:
                    console.log("case 4");
                    $('.calc-title').html('Заполните все поля');
                    break;
                case 5:
                    console.log("case 5");
                    $('.calc-title').html('Количество ваших документов');
                    break;
            }
            $(classFrame).css('display','none');
            $(classNewFrame).css('display','flex');
            numFrame--;
            $('.calc-right .sidebar .sidebar__box').css('width', `calc((100% / ${countFrame}) * ${numFrame})`);
            
        }
    })

})

