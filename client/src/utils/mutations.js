import { gql } from '@apollo/client';

export const ADD_REVIEW = gql`
    mutation addReview($name: String!, $comment: String!) {
        addReview(name: $name, comment: $comment) {
            _id
            name
            comment
        }
    }
`;
// NOT NEEDED
// export const CREATE_SCHEDULE = gql`
//     mutation createSchedule(
//         $name: String!
//         $email: String!
//         $phone: String!
//         $date: String!
//         $time: String!
//         $address: String!
//         $car: String!
//         $service: String!
//     ) {
//         createSchedule(
//             name: $name
//             email: $email
//             phone: $phone
//             date: $date
//             time: $time
//             address: $address
//             car: $car
//             service: $service
//         ) {
//             _id
//             name
//             email
//             phone
//             date
//             time
//             address
//             car
//             service
//         }
//     }
// `;

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($email: String!, $password: String!) {
        updateUser(email: $email, password: $password) {
            _id
            email
        }
    }
`;

export const REMOVE_USER = gql`
    mutation removeUser($email: String!, $password: String!) {
        removeUser(email: $email, password: $password) {
            _id
            email
        }
    }
`;
