export default {
    state: {
        reviewsContent: [
            {
                id: 1,
                avatar: 'reviews-ava-1.png',
                avaAlt: 'reviews-ava',
                name: 'Jane Jesss',
                status: 'Student',
                range: 'Watched 73%',
                desc: '“This is the first time I found a professional online' +
                    ' class h that they have many instructors to explain the material. Thanks”',
                video: 'reviews-video-1.mp4',
                title: 'Designing digital product for enterprise company',
                subname: 'Name Surname',

            },
            {
                id: 2,
                avatar: 'reviews-ava-1.png',
                avaAlt: 'reviews-ava',
                name: 'Jane Jesss',
                status: 'Student',
                range: 'Watched 73%',
                desc: '“This is the first time I found a professional online' +
                    ' class h that they have many instructors to explain the material. Thanks”',
                video: 'reviews-video-1.mp4',
                title: 'Designing digital product for enterprise company',
                subname: 'Name Surname',

            },
            {
                id: 3,
                avatar: 'reviews-ava-1.png',
                avaAlt: 'reviews-ava',
                name: 'Jane Jesss',
                status: 'Student',
                range: 'Watched 73%',
                desc: '“This is the first time I found a professional online' +
                    ' class h that they have many instructors to explain the material. Thanks”',
                video: 'reviews-video-1.mp4',
                title: 'Designing digital product for enterprise company',
                subname: 'Name Surname',

            },
        ],
    },
    getters: {
        REVIEWS_CONTENT(state) {
            return state.reviewsContent;
        }
    },

};
