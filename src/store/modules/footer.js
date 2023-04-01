export default {
    state: {
        footerLogo: [
            {
                logoName: 'Edumena',
                logoUrl: '/',
            },

        ],
        footerContact: [
            {
                street: '123 Market St. #22B \n' +
                    'Charlottesville, California 44635',
                phone: '(434) 546-4356',
                phoneUrl: '4345464356',
                email: 'contact@edumena.org',
                emailUrl: 'contact@edumena.org',
            },
        ],
        footerMenu: [
            {name: 'Home', url: '#'},
            {name: 'Courses', url: '#'},
            {name: 'Mentors', url: '#'},
            {name: 'Community', url: '#'},

        ],
        footerCopy: [
            {copy: '© Copyright 2022 - Edumena'},
        ],
        footerSocial: [
            {label: "Facebook", url: "https://www.facebook.com/"},
            {label: "Twitter", url: "https://twitter.com/"},
            {label: "LinkedIn", url: "https://www.linkedin.com/"},
            {label: "Instagram", url: "https://www.instagram.com/"},
        ],
    },
    getters: {
        FOOTER_LOGO(state) {
            return state.footerLogo;
        },
        FOOTER_CONTACT(state) {
            return state.footerContact;
        },
        FOOTER_MENU(state) {
            return state.footerMenu;
        },
        FOOTER_COPY(state){
          return state.footerCopy;
        },
        FOOTER_SOCIAL(state) {
            return state.footerSocial;
        },
    },
}
