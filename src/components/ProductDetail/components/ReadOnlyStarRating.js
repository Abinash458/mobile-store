import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReadOnlyStarRating = (props) => {
    const comment = props.comments;
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <FaStar
                            className="star"
                            color={ratingValue <= comment ? "#ffc107" : "#e4e5e9"}
                            size={15}
                        />

                    </label>
                );
            })}
        </div>
    );
}

export default ReadOnlyStarRating;