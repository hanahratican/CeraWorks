import { gql } from '@apollo/client';   

export const QUERY_REVIEWS = gql`
    query reviews {
        reviews {
            _id
            name
            comment
        }
    }
`;

// NOT NEEDED
// export const QUERY_SCHEDULES = gql`
//     query schedules {
//         schedules {
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

export const QUERY_USER = gql`
    query user($email: String!) {
        user(email: $email) {
            _id
            email
            password
        }
    }
`;


