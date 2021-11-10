console.log(this);

var sam = {
    chudirvai: function() {
        console.log(this);

        function into1() {
            console.log(this);
        }
        into1();
    }
};

function ob11() {
    console.log(this);
}

sam.chudirvai();
//ob11();