// const { response } = require("express");
// const { FLOAT, INTEGER } = require("sequelize");
const request = require('supertest');
const app = require("./app/index");


describe('landing', function () {
    it('landing test', () => {
        return request(app)
            .get("/")
            .expect('Content-Type', /json/)  
            .expect(200)
            .then((response)=>{
                expect(response.body).toEqual(
                    expect.objectContaining({
                        status: "OK",
                        message: "BCR API is up and running!",     
                    })
                )
            })
    });
});

describe('register', function () {
    it('success register', () => {
        return request(app)
            .post("/v1/auth/register")
            .send({
                "name" : "farrel12",
                "email": "farrel12@gmail.com",
                "password": "farrel12321"
            })
            .set("Accept", "application/json")
            .expect(201)
            .then((response) =>{
                expect(response.body).toEqual(
                    expect.objectContaining({
                        accessToken:  expect.any(String),
                    })
                )
            })
            
    });
});

describe('login', function () {
    it('succes login', () => {
        return request(app)
            .post("/v1/auth/login")
            .send({
                "email" : "lulu@gmail.com",
                "password" : "lulu123"
            })
            .expect('Content-Type', /json/) 
            .expect(201)
            .then((response) =>{
                expect(response.body).toEqual(
                    expect.objectContaining({
                        accessToken: expect.any(String),
                    })
                    
                )
            })
    });
});

// describe('list car', function () {
//     it('show list car', () => {
//         request
//             .get('/v1/cars')
//             .expect('Content-Type', /json/)  
//             .expect('200')
//             .then((response) =>{
//                 expect(response.body).toEqual(
//                     expect.arrayConraining([
//                         expect.objectContaining({
//                             "id": expect.any(INTEGER),
//                             "name": expect.any(String),
//                             "price": expect.any(FLOAT),
//                             "size": expect.any(String),
//                             "image": expect.any(String),
//                             "isCurrentlyRented": expect.any(Boolean),
//                             "createdAt": expect.any(Date),
//                             "updatedAt": expect.any(Date),
//                             "userCar": {
//                                 "id":expect.any(INTEGER),
//                                 "userId": expect.any(INTEGER),
//                                 "carId": expect.any(INTEGER),
//                                 "rentStartedAt": expect.any(String),
//                                 "rentEndedAt": expect.any(String),
//                                 "createdAt": expect.any(Date),
//                                 "updatedAt": expect.any(Date),
//                             }
//                         })
//                     ])
//                 )
//             })
//     });
// });