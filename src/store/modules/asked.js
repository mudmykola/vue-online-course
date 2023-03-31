export default {
    state: {
        askedContent: [

            {
                id: 1,
                active: false,
                btn: 'How much should i pay for online class?',
                desc: '“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”' +
                    '“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”',
            },
            {
                id: 2,
                active: false,
                btn: 'Can i custumize my class learning online?',
                desc: '“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”',
            },
            {
                id: 3,
                active: false,
                btn: 'Can i choose a tutor or teacher for online class?',
                desc: '“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”',
            },
            {
                id: 4,
                active: false,
                btn: '24/7 custemer services?',
                desc: '“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”',

            },
            {
                id: 5,
                active: false,
                btn: 'How do i get the online learning materials?',
                desc: '“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”',

            },

        ],
        askedTitle: [
            {
                id:1,
                title: 'Frequently Asked Questions',
                subtitle: 'Browser our faq’s below, if you can not find the' +
                    ' answer at Edumena',

            },
        ],
        askedSend: [
            {
              id: 1,
                subtitle: 'JOIN NOW',
                title: 'Stream anywhere.\n' +
                    'Cancel anytime.',
                desc: 'Come on, register yourself to join online classes with.\n' +
                    'register with your email account and submit now,',
                img: 'asked-send-img.png',
                aliImg: 'asked-send-img',
            },
        ],
    },
    getters: {
        ASKED_ACCORDION(state) {
            return state.askedContent;
        },
        ASKED_TITLE(state){
            return state.askedTitle;
        },
        ASKED_SEND(state){
          return state.askedSend;
        },
    },

};
