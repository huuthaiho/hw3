const dns = require('dns');

dns.resolve4('www.mum.edu', function (err, ret) {
    if (err) throw err;
    console.log(ret);
});

dns.resolve4('www.mum.edu', function (err, ret) {
    return new Promise(function(resolve, reject) {
        if (err) reject(err);
        else resolve(ret);
    }).then(console.log(ret)).catch(err);
});

dns.resolve4('www.mum.edu', async function (err, ret) {
    try {
        await console.log(ret);
    } catch (e) {
        console.log(e)
    }
});