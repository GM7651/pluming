// reviews.js
import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();

        if (data.reviews) {
          setReviews(data.reviews);
        } else {
          console.log("No reviews found.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-container">
      <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review p-4 mb-4 border-b">
            <p className="font-semibold">{review.author_name}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
