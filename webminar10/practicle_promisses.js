function download(url) {
    return new promise(function(resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new error("url does not start with http"));
        } else {
            setTimeout(function() {
                let fileName = url.split("/").pop();
                resolve(fileName);
            }, 3000);
        }
    });
}

function resize(fileName) {
    return new Promise(function(resolve, reject) {
        if (!fileName.endsWith(".png")) {
            reject(new error("file is not png"));
        } else {
            setTimeout(function() {
                let resizedfile = fileName.split(".") + "-resized.png";
                resolve(resizedfile);
            });
        }
    });
}
download('http://cb.lk/logo.png')
    .then(function(filename) {
        resize(filename).then(function(resizedfile) {
            console.log("Resized file is at:" + resizedfile);
        });
    });
.catch(function(err) {
    console.error(err);
});