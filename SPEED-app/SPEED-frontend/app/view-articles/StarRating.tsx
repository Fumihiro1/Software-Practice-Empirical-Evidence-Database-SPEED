// components/StarRating.tsx
import React, { useState } from 'react';

interface StarRatingProps {
  initialRating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (newRating: number) => {
    setRating(newRating);
    setSubmitted(false); // Reset submitted state when changing rating
    onRatingChange(newRating); // Call the onRatingChange callback
  };

  const handleSubmit = () => {
    setSubmitted(true); // Mark as submitted
    // Here you can call any additional functions if needed, like saving to the database
  };

  return (
    <div className="flex flex-col">
      <div className="flex mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`cursor-pointer text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => handleStarClick(index + 1)}
          >
            ★
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className={`mt-2 p-2 text-white rounded ${submitted ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
        disabled={submitted} // Disable button if already submitted
      >
        {submitted ? 'Rating Submitted' : 'Submit Rating'}
      </button>
    </div>
  );
};

export default StarRating;

