function download(url) {
    return new promise(function(resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new error("url does not start with http"));
        } else {
            setTimeout(function() {
                let fileName = url.split("/").pop()
                resolve(fileName)
            }, 3000)
        }
    })
}

function resize(fileName) {
    return new Promise(function(resolve, reject) {
        if (!fileName.endsWith(".png")) {
            reject(new error("file is not png"))
        } else {
            setTimeout(function() {
                let resizedfile = fileName.split(".") + "-resized.png"
                resolve(resizedfile)
            })
        }
    })
}
Promise.all([                                // if in one there is error other will not work.
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
]).then(function (values) {
    console.log(values)
    
}).catch(function(err) {
    console.error(err)
})