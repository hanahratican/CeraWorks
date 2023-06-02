import { gql } from '@apollo/client';

export const ADD_REVIEW = gql`
    mutation addReview($name: String!, $rating: Int!, $comment: String!) {
        addReview(name: $name, rating: $rating, comment: $comment) {
            _id
            name
            rating
            comment
        }
    }
`;

export const CREATE_SCHEDULE = gql`
    mutation createSchedule(
        $firstName: String!
        $lastName: String!
        $email: String!
        $phone: String!
        $date: String!
        $time: String!
        $address: String!
        $car: String!
        $service: String!
    ) {
        createSchedule(
            firstName: $firstName
            lastName: $lastName
            email: $email
            phone: $phone
            date: $date
            time: $time
            address: $address
            car: $car
            service: $service
        ) {
            _id
            firstName
            lastName
            email
            phone
            date
            time
            address
            car
            service
        }
    }
`;