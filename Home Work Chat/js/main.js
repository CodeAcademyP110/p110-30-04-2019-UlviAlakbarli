"use strict";
$(document).ready(function () {
    

    $(".support-button").click(function(){
        $(this).addClass("d-none");
        $(".support-message").removeClass("d-none");
        $("input").focus();
        
    })
    $(".far.fa-caret-square-down").click(function(){
        $(".support-message").addClass("d-none");
        $(".support-button").removeClass("d-none");
    })
    
      $(".fas.fa-paper-plane").click(function(){
        let inp=$("input").val().trim();
         sendMessage(inp);
         });
         $("input").keydown(function (e) { 
           if(e.which===13){
                let inp=$("input").val().trim();
                sendMessage(inp);
             }
         });
    
       function sendMessage(inp){
        if(inp.length>0){
            let createLi=$("<li>");
            let createP=$("<p>");
            createP.text(inp);
            let createimg=$("<img>");
            if(inp[0]===inp[0].toUpperCase()){
                createimg.attr("src","img/support.png")

            }
            else{
                createimg.attr("src","img/user.png");
                createLi.addClass("right-li");
            }
            createLi.append(createimg);
            createLi.append(createP);
            $(".messages-content").append(createLi);
             let spmes=document.querySelector(".messages-content");
            spmes.scrollTo(0,spmes.scrollHeight);
            $("input").val("");

        }

    }
    //WAy1
    // $(document).on("click","li",function(){
    //         $(this).toggleClass("dalete");
    //         if($("li").hasClass("dalete")){
    //             $(".bg-danger").removeClass("d-none");
    //             $(document).on("click",".bg-danger",function(){
    //                 $(".dalete").each((index,value)=>{
    //                       $(value).remove();
    //                     $(".bg-danger").addClass("d-none");
    //                 })
                   
    //             })

    //         }
    //         else{
    //             $(".bg-danger").addClass("d-none");
    //         }
            
    //     })

    //WAY2
         $(document).on("click","li",function(){
            $(this).toggleClass("dalete");
            if($(".dalete")){
                $(".bg-danger").removeClass("d-none");
                $(".bg-danger").click(function(){
                    $(".dalete").remove();
                    $(this).addClass("d-none");
                })

            }
            else{
                $(".bg-danger").addClass("d-none");
            }
            
        })
});


