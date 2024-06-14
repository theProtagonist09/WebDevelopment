$("button").click(function(){
       $("h1").fadeOut();
    });
$(document).keydown(function(event){
    $("h1").html(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","red");
})

$("h1").before("<button>Up</button>");
$("h1").after("<button>Down</button><br/>");

$("h1").prepend("<button>Left</button>");
$("h1").append("<button>Right</button>");


