function foo(){
    var bar;
    quux = "This is global";
    function zip(){
         var quux = "This is scoped";
    }
}