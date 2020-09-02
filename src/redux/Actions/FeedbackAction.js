import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

// POST FEEDBACK
export const postFeedback = (firstName, lastName, telNum, email, agree, contactType, message) => (dispatch) => {

    const newFeedBack = {
        firstName: firstName,
        lastName: lastName,
        telNum: telNum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }

    return fetch(baseUrl + "/feedback", {
        method: "POST",
        body: JSON.stringify(newFeedBack),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
        .then(response => response.json())
        .then(response => alert("Thank you for your feedback!" + JSON.stringify(response)))
        .catch(error => {
            console.log("post Feedback ", error.message)
            alert("Your feedback could not be posted\n Error: " + error.message);
        });
}