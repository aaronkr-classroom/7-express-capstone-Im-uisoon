// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {
    res.render('index');
}

/**
 * Listing 10.3 
 */
exports.getHome = (req, res) => { res.render('index', {
    name: "Sarah",
    people: {
        usa: {
            einstein: "Alber Einstein",
            musk: "Elon Musk",
            jobs: "Steve Jobs"
        },
        korea: {
            psy: "싸이다!",
            kim: "김예수"
        },
        mexico: {
            jesus: "Jesus Alvarez"
        }
    }
}); } // "/" index
// exports.getContact = (req, res) => {} // "/Contact" Get method
// exports.postContact = (req, res) => {} // "/Contact" Post method

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;  // 라우트 매개변수 /name/:myname
    res.render('index', { 
        name: paramsName ,
        people: {
            usa: {
                einstein: "Alber Einstein",
                musk: "Elon Musk",
                jobs: "Steve Jobs"
            },
            korea: {
                psy: "싸이다!",
                kim: "김예수"
            },
            mexico: {
                jesus: "Jesus Alvarez"
            }
        }
    });
};