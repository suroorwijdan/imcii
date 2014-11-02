var ImageToAscii = require("image-to-ascii");

var imcii = new ImageToAscii({
    resize: {
        height: "100%",
        width: "50%"
    },
    multiplyWidth: 1,
    colored: true
});

imcii.convert(__dirname + "/nodeconfin.png", function(err, converted) {
    console.log(err || converted);
});
