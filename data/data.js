const data = {
    api: {
        query: 'retail',
        suggestions: [
         {
          value: 'Retail',
          sectionID: 3267
         },
         {
          value: 'Retail',
          sectionID: 6562
         },
         {
          value: 'Retail & Sale Signs',
          sectionID: 6441
         },
         {
          value: 'Retail Display Cases',
          sectionID: 6563
         },
         {
          value: 'Retail Display Props & Models',
          sectionID: 6564
         }
        ]
    },
    heroBanner: {
        heroMessage: {
            title: 'Think Retail. Think reuse.'
        },
        heroForms: [{
            label: 'What are you looking for?',
            id: 'keyword',
            placeholder: 'Retail, Kitchen...',
        }, {
            label: 'Distance (miles)',
            id: 'distance',
            placeholder: '10, 1/4...',
            customClass: 'miles'
        }, {
            label: 'Location',
            id: 'location',
            placeholder: 'London',
        }],
        heroButton: {
            text: 'Search',
            customClass: 'customMargin',
            icon: 'fas fa-search',
        }
    },
    mainNav: {
        navigationIcon: {
            image: 'https://www.globechain.com/site_resources/globechain/images/globechain_logo_dark_small.png',
            link: 'https://www.globechain.com/',
            classes: 'float-left',
            target: 'myTopnav',
            id: 'home'
        },
        navigation: [{
            title: 'Sign Up',
            target: 'notarget',
            classes: null,
            innerClasses: 'signUp',
            id: 'contact'
        }, {
            title: 'Login',
            target: 'notarget',
            classes: null,
            id: 'mywork'
        }],
        subNav: [{
            title: 'Partners',
            target: 'notarget',
            classes: null,
            id: 'Partners'
        }, {
            title: 'Case Studies',
            target: 'notarget',
            classes: null,
            id: 'Case'
        }, {
            title: 'Sectors',
            target: 'notarget',
            classes: null,
            id: 'Sectors'
        }, {
            title: 'Charities',
            target: 'notarget',
            classes: null,
            id: 'chatiries'
        }, {
            title: 'Blog',
            target: 'notarget',
            classes: null,
            id: 'blog'
        }, {
            title: 'Contact',
            target: 'notarget',
            classes: null,
            id: 'contact'
        }]
    }
}

export default data;