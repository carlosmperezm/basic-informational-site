import http from "node:http";
import fs from "node:fs";

let indexHtml;
let aboutHtml;
let contactMeHtml;
let errorHTML;

fs.readFile("./index.html", "utf-8", (err, data) => { err ? indexHtml = err : indexHtml = data; });
fs.readFile("./about.html", "utf-8", (err, data) => { err ? aboutHtml = err : aboutHtml = data });
fs.readFile("./contact-me.html", "utf-8", (err, data) => { err ? contactMeHtml = err : contactMeHtml = data });
fs.readFile("./404.html", "utf-8", (err, data) => { err ? errorHTML = err : errorHTML = data });

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url == "/") {
        res.write(indexHtml);
    } else if (req.url == '/about') {
        res.write(aboutHtml);
    } else if (req.url == '/contact-me') {
        res.write(contactMeHtml);
    } else {
        res.write(errorHTML);
    }
    res.end();
});

server.listen(8080);
