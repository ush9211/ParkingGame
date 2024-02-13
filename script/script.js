$(function(){

    $(document).keydown(function(e){

        // 키보드에서 아무 키를 눌렀을때 그 키의 값이 얼마인지 확인하는 식
        // console.log(e.keyCode);

        const parkTop = $('.park').offset().top;
        const parkLeft = $('.park').offset().left;
        console.log(parkTop,parkLeft);
        
        let mycar = $('.mycar').offset();

        switch(e.keyCode){
            case 37:
                $('.gas').show();
                $('.mycar')
                .css('transform', 'rotate(270deg)')
                .stop()
                .animate({left: '-=200px'}, 500, function(){
                    $('.gas').hide();
                    if((Math.abs(mycar.top - parkTop)<50) && (Math.abs(mycar.left - parkLeft)<50)){
                        alert("주차 성공!!");
                    };
                    
                });
            break;
            case 38:
                $('.gas').show();
                $('.mycar')
                .css('transform', 'rotate(0deg)')
                .stop()
                .animate({top: '-=200px'}, 500, function(){
                    $('.gas').hide();
                    if((Math.abs(mycar.top - parkTop)<50) && (Math.abs(mycar.left - parkLeft)<50)){
                        alert("주차 성공!!");
                    };
                });
            break;
            case 39:
                $('.gas').show();
                $('.mycar')
                .css('transform', 'rotate(90deg)')
                .stop()
                .animate({left: '+=200px'}, 500, function(){
                    $('.gas').hide();
                    if((Math.abs(mycar.top - parkTop)<50) && (Math.abs(mycar.left - parkLeft)<50)){
                        alert("주차 성공!!");
                    };
                });
            break;
            case 40:
                $('.gas').show();
                $('.mycar')
                .css('transform', 'rotate(180deg)')
                .stop()
                .animate({top: '+=200px'}, 500, function(){
                    $('.gas').hide();
                    if((Math.abs(mycar.top - parkTop)<50) && (Math.abs(mycar.left - parkLeft)<50)){
                        alert("주차 성공!!");
                    };
                });
            break;
        }
    });

    
});