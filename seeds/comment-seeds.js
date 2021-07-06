const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Good Job!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Yoda will appove!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "The force is with you!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Yoda Approved! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news! Thank you!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I love it!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;