import axios from "axios";

export default {
    state: {
        mentorsItem: [
            {
                id: 1,
                avatar: 'avatar-1.png',
                alt: "avatar-img-1",
                name: "Mr. Sandi Tofang",
                skill1: 'Mentoring',
                skill2: 'Artist class',
                btn: 'View Details',
            },
            {
                id: 2,
                avatar: 'avatar-2.png',
                alt: "avatar-img-2",
                name: "Evan You",
                skill1: 'Front-End Engineer',
                skill2: 'Senior',
                btn: 'View Details',
            },
            {
                id: 3,
                avatar: 'avatar-3.png',
                alt: "avatar-img-3",
                name: "Li Chou",
                skill1: 'SMM',
                skill2: 'Manager',
                btn: 'View Details',
            },
            {
                id: 4,
                avatar: 'avatar-4.png',
                alt: "avatar-img-4",
                name: "Kamo Miro",
                skill1: 'Back-End Developer',
                skill2: 'Middle',
                btn: 'View Details',
            },

            {
                id: 5,
                avatar: 'avatar-1.png',
                alt: "avatar-img-1",
                name: "Mr. Sandi Tofang",
                skill1: 'Mentoring',
                skill2: 'Artist class',
                btn: 'View Details',
            },
            {
                id: 6,
                avatar: 'avatar-2.png',
                alt: "avatar-img-2",
                name: "Evan You",
                skill1: 'Front-End Engineer',
                skill2: 'Senior',
                btn: 'View Details',
            },
            {
                id: 7,
                avatar: 'avatar-3.png',
                alt: "avatar-img-3",
                name: "Li Chou",
                skill1: 'SMM',
                skill2: 'Manager',
                btn: 'View Details',
            },
            {
                id: 8,
                avatar: 'avatar-4.png',
                alt: "avatar-img-4",
                name: "Kamo Miro",
                skill1: 'Back-End Developer',
                skill2: 'Middle',
                btn: 'View Details',
            },
        ],
        mentorsVideo: [
            {
                id: 1,
                title: 'Designing digital product for enterprise company',
                desc: 'You can create a design by maintaining your content' +
                    ' here. teach will provide facilities hope you like that',
                icon:  'stars-icon.svg',
                number: '5.0',
                video: 'video.mp4',
            }
        ],
        mentorsVideoStars: [
            {
                id: 1,
                iconStars: 'stars-icon.svg',
                iconAlt: 'stars-icon',
            },
            {
                id: 2,
                iconStars: 'stars-icon.svg',
                iconAlt: 'stars-icon',
            },
            {
                id: 3,
                iconStars: 'stars-icon.svg',
                iconAlt: 'stars-icon',
            },
            {
                id: 4,
                iconStars: 'stars-icon.svg',
                iconAlt: 'stars-icon',
            },
            {
                id: 5,
                iconStars: 'stars-icon.svg',
                iconAlt: 'stars-icon',
            },
        ],
    },
    mutations: {
        SET_CARD(state, mentorsItem) {
            state.mentorsItem = mentorsItem
        }
    },
    actions: {
        viewProfile({commit}) {
            axios.get('/api/mentorsItem').then(response => {
                commit('SET_CARD', response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    getters: {
        MENTORS_ITEM(state) {
            return state.mentorsItem;
        },
        MENTORS_VIDEO(state){
            return state.mentorsVideo;
        },
        MENTORS_STARS(state){
            return state.mentorsVideoStars;
        },
    },
};
