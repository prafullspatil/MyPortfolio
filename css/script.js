$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >40)
        {
            $('.navigation-bar').addClass("sticky")
        }else{
            $('.navigation-bar').removeClass("sticky")
        }
    })
    //toggle  menu/ navbar script
    $('.menu-btn').click(function(){
        $('.navigation-bar .nav').toggleClass("active");
    });
      $('.navigation-bar .nav a').click(function(){
        $('.navigation-bar .nav').toggleClass("active");
    });
});

function age()
{
    var bage = 1999;
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    //document.writeln(month);
    var age = year - bage;
    if(month == 5)
    {
        if(date >= 13)
        {
            var age = year - bage;
            document.getElementById("age").innerText=age;
        }
    }
    if(month >= 5)
    {
        var age = year - bage;
        document.getElementById("age").innerText=age;
    }
    else
    {
        age--;
        document.getElementById("age").innerText=age;
    }

}