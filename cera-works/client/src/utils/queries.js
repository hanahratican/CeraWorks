import { gql } from '@apollo/client';   

export const QUERY_REVIEWS = gql`
    query reviews {
        reviews {
            _id
            name
            rating
            comment
        }
    }
`;

export const QUERY_SCHEDULES = gql`
    query schedules {
        schedules {
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
