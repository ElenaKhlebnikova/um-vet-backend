# 🤖 UmVet Backend

Welcome to UmVet backend repository! This is backend for [UmVet](https://github.com/ElenaKhlebnikova/um-vet-frontend)

Appointments' model was inspired by: https://devpress.csdn.net/react/62ec4c9a89d9027116a109ee.html




## 🏗️ Tech Stack

UmVet backend is built with the following tech stack:

| Technology                                                          | Usage                                                                                                          
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Node.js                                     | JS runtime to build backend APIs      |
| Express                                    | Node.js framework for building APIs |
| MongoDB                           | Database used to store list of meals and comments                              |

                                                              

## 👀 Project Overview

Click  [here](https://nodejs-production-ee89.up.railway.app/) to view the API.


### Routes

*possible lang variants are 'en' and 'de'
| Route  | Description   | Example  |
|---|---|---|
| GET "/blog?lang=en"   | returns blog posts (in english if land=en and in German if lang=de |  [view Example](https://nodejs-production-ee89.up.railway.app/blog?lang=en) |  
| GET "/blog:postId?lang=en"   | returns one blog posts (in english if land=en and in German if lang=de |  [view Example](https://nodejs-production-ee89.up.railway.app/blog/6460de73e26914f09abb42e2?lang=en) |  
GET "/appointments/:doctorId"  |  returns list appointments that have been booked with the doctor |  [view Example](https://nodejs-production-ee89.up.railway.app/appointments/64466a35b6d3c5e48ed2d191) |
POST "/appointments"  |  route that is used to make an appointment. It takes following parameners: doctorId, name, phone, procedure, date, startTime |  [view Example](https://ibb.co/7zNsyX3) |
POST "/comments"  |  route that is used to create a review. It takes following parameners: doctorId, name, comment, rating, createdAt |  [view Example](https://ibb.co/TM4jVRx) |
GET "/doctors?lang=en"  |  returns a list of doctors  | [view Example](https://nodejs-production-ee89.up.railway.app/doctors?lang=en)  | 
GET "/doctors/644b8cf81492bc460be6649e/?lang=en"  |  returns information about one doctor  | [view Example](https://nodejs-production-ee89.up.railway.app/doctors/644b8cf81492bc460be6649e/?lang=en)  |      
GET "/service-and-prices?lang=en"   |  returns a list of services and prices  | [view Example](https://nodejs-production-ee89.up.railway.app/service-and-prices?lang=en)  |  













## 👩‍⚕️ Features 

1.  Storing appointments and comments in the MongoDB.
2.  Ability to choose languages.



## 📖What I have learnt
1. Using Node.js and Express to create a backend API.
2. How to handle request on the backend and store it in DB.
3. How to use .env.
4. How to build simple models  for blogposts, comments, and doctors.
5. How to integrate MongoDB with an Express API using Mongoose ORM.
6. How to deploy to Netlify, Render and Railway.
7. How to use Postman to send requests to the API.

