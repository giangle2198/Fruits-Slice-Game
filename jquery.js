//Click button start/reset
    //Playing
        //Reload Page
    //Not Playing
        //Change button text Reset Game
        //Show trialsleft box
        //1.Create radom fruit
        //define a random step
        //2.Move fruit down one step
            //2.1.Click mouse -> score increase
            //2.2.fruit too low
                //remove one heart
                //Loop Step 1
        //Game over -> Show message - change button to Start game

var playing = false;
var trialleft;
var score;
var step;
var action;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

$(function(){
    $("#startreset").click(function(){
        if(playing == true){
            location.reload();
        }else{
            playing = true;
            
            trialleft = 3;
            
            score = 0;
            
            $("#scorevalue").html(score);
            
            $("#startreset").html("Reset Game");
            
            $("#trialleft").show();
            
            addHearts();
            
            $("#gameOver").hide();
            
            startAction();
        }
    });
    
    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
//        $("#soundslice")[0].play();
        clearInterval(action);
        $("#fruit1").hide("explode", 500);
        setTimeout(startAction,500);
    });
    
    function addHearts(){
        $("#trialleft").empty();
        for(i = 0; i < trialleft; i ++){
            $("#trialleft").append('<img src="images/heart.png" class="life">');
        }
    }
    
    
    function startAction(){
        $("#fruit1").show();
        chooseFruit();
        $("#fruit1").css({'left' :Math.round(600*Math.random())-300,  'top' : -100 });
        
        step = 1 + Math.round(5*Math.random());
        
        action = setInterval(function(){
            $("#fruit1").css("top", $("#fruit1").position().top + step);
            
            if($("#fruit1").position().top > $("#fruitcontainer").height()){
                if(trialleft > 1){
                    $("#fruit1").show();
                    chooseFruit();
                    $("#fruit1").css({'left' :Math.round(600*Math.random())-300,  'top' : -100});
        
                    step = 1 + Math.round(5*Math.random());  
                    
                    trialleft --;
                    
                    addHearts();
                }else{
                    playing = false;
                    $("#startreset").html("Start Game");
                    $("#gameOver").show();
                    $("#gameOver").html("<p>Game Over!</p><p>Your Score is "+score+"</p>");
                    $("#trialleft").hide();
                    stopAction();
                }
            }
        },50)
        
    }
    

    
    function chooseFruit(){
        var number = Math.round(8*Math.random());
        $("#fruit1").attr('src', 'images/'+ fruits[number] +'.png');
    }
    
    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }
});

