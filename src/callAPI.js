// function analysis() {
//     console.log("analysis");
//     var xhttp = new XMLHttpRequest();
//     var url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD2UjXWVIdRvvFU-h1nlbA1XKRJnjD2p5Q";
//     xhttp.open("POST", url, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     // var img = new Image();
//     // img.src = 'banana.jpg';
//     // var img64 = getBase64Image(img);
//     var pathToImg = 'banana.jpg';
//
//     var req = {
//         "requests": [
//             {
//                 "image": {
//                     "source": {
//                         "imageUri": "gs://dontbetrashy/" + pathToImg
//                     }
//                 },
//                 "features": [
//                     {
//                         "type": "LABEL_DETECTION",
//                         "maxResults": 1
//                     }
//                 ]
//             }
//         ]
//     };
//
//     console.log(xhttp.send(JSON.stringify(req)));
//     console.log("response:", JSON.stringify(xhttp.response));
//     return JSON.stringify(xhttp.response);

//}
//
// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);
//     var dataURL = canvas.toDataURL("image/png");
//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

function analysis(filepath) {


    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    // Performs label detection on the image file
    client
        .labelDetection(filepath)
        .then(results => {
            const labels = results[0].labelAnnotations;

            console.log('Labels:');
            labels.forEach(label => console.log(label.description));
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}