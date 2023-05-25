import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { format } from 'date-fns';
import getUserById from '../../contexts/auth';
import { message } from 'antd'


const Ratings = () => {
    const [ratings, setRatings] = useState([]);
    const [userNames, setUserNames] = useState({});
    const [newRating, setNewRating] = useState({ rating: 0, comment: '' });
    const [ratedUserIds, setRatedUserIds] = useState([]);
    const [updatingRating, setUpdatingRating] = useState(null);
    const [updatedRating, setUpdatedRating] = useState({ rating: 0, comment: '' });
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:1337/api/ratings');
            let ratingsData = response.data.data;

            // Sort the ratings based on whether the logged-in user has rated or not
            const ratedUserIndex = ratingsData.findIndex((rating) => rating.attributes.userId === userId);
            const sortedRatings = ratingsData.sort((a, b) => {
                if (a.attributes.userId === userId && b.attributes.userId !== userId) {
                    return 1;
                } else if (b.attributes.userId === userId && a.attributes.userId !== userId) {
                    return -1;
                } else {
                    return new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt);
                }
            });
            setRatings(sortedRatings);

            setRatings(ratingsData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchUserNames = async () => {
            const names = {};
            for (const rating of ratings) {
                const user = await getUserById(rating.attributes.userId);
                names[rating.id] = user?.data.attributes.name ?? 'Unknown';
            }
            setUserNames(names);
        };
        fetchUserNames();
    }, [ratings]);

    useEffect(() => {
        const fetchRatedUserIds = async () => {
            const response = await axios.get('http://localhost:1337/api/ratings');
            const ratedIds = response.data.data.map((rating) => rating.attributes.userId);
            setRatedUserIds(ratedIds);
        };
        fetchRatedUserIds();
    }, []);

    const handleRatingChange = (rating) => {
        setNewRating((prevRating) => ({ ...prevRating, rating }));
    };

    const handleCommentChange = (event) => {
        const comment = event.target.value;
        setNewRating((prevRating) => ({ ...prevRating, comment }));
    };

    const handleAddRating = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            message.error('User ID not found in localStorage');
            return;
        }

        if (ratedUserIds.includes(userId)) {
            message.error('Bạn đã đánh giá rồi!');
            return;
        }

        if (newRating.rating === 0 || newRating.comment === '') {
            message.error('Please fill out all rating information');
            return;
        }

        const response = await fetch('http://localhost:1337/api/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    rating: newRating.rating,
                    comment: newRating.comment,
                    userId: userId,
                }
            })
        });
        const data = await response.json();
        message.success('Rating successfully')
        const newRatingData = data.data;
        setRatedUserIds([...ratedUserIds, userId]);

        // Add the new rating to the beginning of the ratings list
        setRatings((prevRatings) => [newRatingData, ...prevRatings]);

        setNewRating({ rating: 0, comment: '' });
    };

    const handleUpdateRating = (ratingId) => {
        const userId = localStorage.getItem('userId');

        const rating = ratings.find((rating) => rating.id === ratingId);
        if (rating.attributes.userId !== userId) {
            message.error('You can only update your own ratings');
            return;
        }
        setUpdatingRating(ratingId);
        setUpdatedRating({
            rating: rating.attributes.rating,
            comment: rating.attributes.comment
        });
    };

    const handleUpdatedRatingChange = (rating) => {
        setUpdatedRating((prevRating) => ({ ...prevRating, rating }));
    };

    const handleUpdatedCommentChange = (event) => {
        const comment = event.target.value;
        setUpdatedRating((prevRating) => ({ ...prevRating, comment }));
    };

    const handleUpdateRatingSubmit = async () => {
        const response = await fetch(`http://localhost:1337/api/ratings/${updatingRating}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    rating: updatedRating.rating,
                    comment: updatedRating.comment,
                }
            })
        });
        const data = await response.json();
        message.success('Update rating successfully.')
        const updatedRatingData = data.data;

        // Replace the updated rating in the ratings list
        setRatings((prevRatings) =>
            prevRatings.map((rating) => {
                if (rating.id === updatedRatingData.id) {
                    return updatedRatingData;
                }
                return rating;
            })
        );
        setUpdatedRating({ rating: 0, comment: '' });
        setUpdatingRating(null);
    };
    const handleDeleteRating = async (ratingId) => {
        const response = await fetch(`http://localhost:1337/api/ratings/${ratingId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        message.success('Delete rating successfully.')

        // Remove the deleted rating from the ratings list
        setRatings((prevRatings) => prevRatings.filter((rating) => rating.id !== ratingId));

        // Add the deleted rating's userId to ratedUserIds
        const deletedRating = ratings.find((rating) => rating.id === ratingId);
        setRatedUserIds((prevRatedUserIds) => prevRatedUserIds.filter((userId) => userId !== deletedRating.attributes.userId));
    };
    return (
        <div className="ratings-container">
            {ratings.map((rating) => (
                <div className="rating" key={rating.id}>
                    <p>Fullname: {userNames[rating.id]}</p>
                    {updatingRating === rating.id ? (
                        <div className="update-rating">
                            <div className="rating-stars">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        key={rating}
                                        onMouseEnter={() => handleUpdatedRatingChange(rating)}
                                        className={updatedRating.rating >= rating ? 'selected' : ''}
                                    />
                                ))}
                            </div>
                            <textarea placeholder="Comment" value={updatedRating.comment} onChange={handleUpdatedCommentChange}></textarea>
                            <button onClick={handleUpdateRatingSubmit}>Update</button>
                        </div>
                    ) : (
                        <>
                            <div className="rating-stars">
                                {Array.from({ length: rating.attributes.rating }, (_, index) => (
                                    <FontAwesomeIcon icon={faStar} key={index} />
                                ))}
                            </div>
                            <p>Comment: {rating.attributes.comment}</p>
                            <p>Created at: {format(new Date(rating.attributes.createdAt), 'yyyy-MM-dd')}</p>
                            {
                                (rating.attributes.userId === userId) ?
                                    <>
                                        <button onClick={() => handleUpdateRating(rating.id)}>Update</button>
                                        <button onClick={() => handleDeleteRating(rating.id)}>Delete</button>
                                    </>
                                    :
                                    ''
                            }

                        </>
                    )}
                </div>
            ))}

            <div className="add-rating">
                <h3>Add Rating</h3>
                <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <FontAwesomeIcon
                            icon={faStar}
                            key={rating}
                            onMouseEnter={() => handleRatingChange(rating)}
                            className={newRating.rating >= rating ? 'selected' : ''}
                        />
                    ))}
                </div>
                <textarea placeholder="Comment" value={newRating.comment} onChange={handleCommentChange}></textarea>
                <button onClick={handleAddRating}>Submit</button>
            </div>
        </div>
    );
};

export default Ratings;