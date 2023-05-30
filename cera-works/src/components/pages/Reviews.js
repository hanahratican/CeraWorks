import React, { useState } from 'react';
import { FaCarSide } from 'react-icons/fa';

export default function Reviews() {

    const stars= Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value => {
        setCurrentValue(value);
    };

    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const styles = {
        container: {
            paddingTop: '20vh',
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        textarea: {
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            width: 300,
            margin: "20px 0",
            minHeight: 100,
            padding: 10
        },
        button: {
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            width: 300,
            padding: 10
        },
        stars: {
            display: "flex",
            flexDirection: "row",
        },
        name: {
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            width: 300,
            margin: "10px 0",
            padding: 5
        }
    };

    return (
      <div style={styles.container}>
        <h1>Reviews</h1>
        <div style={styles.stars}>
            {stars.map((_, index) => {
                return (
                    <FaCarSide 
                    key={index}
                    size={24}
                    style={{
                        marginRight: 10,
                        cursor: "pointer"
                    }}
                    color={hoverValue || currentValue > index ? "#ffc107" : "#bfbfbf"}
                    onClick={() => handleClick(index + 1)}
                    
                    />
                )
            })}
        </div>
        <textarea
        placeholder='Please leave a review'
        style={styles.textarea}
        />
        <input placeholder='Name' style={styles.name} />
        <button style={styles.button}>Submit</button>
      </div>
    );
}