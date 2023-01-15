export const RunningData=[
    {
        label:'Years of running!',
        fieldName:'yearsOfRunning',
        required: true,
        type:'radio',
        options:[
            'Beginner','Less than 1 year','1-3 years','3-5 years','5-10 years','10+ years'
        ]
    },{
        label:'Preferred running distance',
        fieldName:'preferredRunningDistance',
        required: true,
        type:'radio',
        options:[
            '5k','10k','21k','42k','Ultra-Marathon'
        ]
    }
    ,{
        label:'DId you have any injury during the last 6 monts? If yes, Which part of the body? ',
        fieldName:'injury',
        required: true,
        type:'checkbox',
        options:[
            'None','Knee','Foot','Thighs','Hip','Other'
        ]
    },
    {
        label:'Have you felt discomfort/fatigue/pain in the last few weeks? If yes, Which part of the body?',
        fieldName:'pain',
        required: true,
        type:'checkbox',
        options:[
            'No','Knee','Foot','Thighs','Hip','Other'
        ]
    },
    {
        label:'How do you get trained ',
        fieldName:'training',
        required: true,
        type:'radio',
        options:[
            'Self Training', 'Internet based training','Training under a coach or academy'
        ]
    },
    {
        label:'Do you use any running device? (E.g. Heart rate monitor, Accelerometer, etc.)',
        fieldName:'device',
        required: true,
        type:'radio',
        options:[
            'Yes','No'
        ]
    },{
        label:'Do you warm-up before workout?',
        fieldName:'warmUp',
        required: false,
        type:'checkbox',
        options:[
            'Yes','No'
        ]
    },{
        label:'Do you cool-down after workout?',
        fieldName:'coolDown',
        required: true,
        type:'radio',
        options:[
            'Yes','No'
        ]
    },{
        label:'Average number of runs a week? ',
        fieldName:'runsPerWeek',
        required: true,
        type:'text',
    },{
        label:'Preferred running shoes',
        fieldName:'preferredRunningShoes',
        required: true,
        type:'radio',
        options:[
            'Barefoot','Minimal','High cushioned','Over pronated', 'Over supinated'
        ]
    },
    {
        label:'Criteria for changing shoes',
        fieldName:'criteriaForChangingShoes',
        required: true,
        type:'radio',
        options:['Mileage','Age of shoe','Wear and tear','Fashion','Other']
    },{
        label:'When did you change your shoe last?',
        fieldName:'lastShoeChange',
        required: true,
        type:'radio',
        options:[
            '3 months', '6 months', '9 months', '12 months','>12 months'
        ]
    },{
        label:'Location',
        type:'text',
        fieldName:'location',
        required: true,

    },{
        label:'If academy /coach/Internet based training, please specify details.',
        type:'text',
        fieldName:'trainingDetails',
        required: false,
    },
    {
        label:'How would you favour a technology that continually monitors your body movement and suggests customized changes for improving performance?',
        type:'radio',
        fieldName:'technologyFavour',
        required: true,
        options:[
            '1','2','3','4','5'
        ]
    }
    
]

export const movieQuestionnaire =[
    {
        label:'What is your favourite movie genre?',
        fieldName:'movieGenre',
        required: true,
        type:'radio',
        options:[
            'Action','Comedy','Drama','Horror','Romance','Sci-Fi','Thriller'
        ]
    },{
        label:'What is your favourite movie?',
        fieldName:'favouriteMovie',
        required: true,
        type:'text',
    },{
        label:'What is your favourite movie actor?',
        fieldName:'favouriteActor',
        required: true,
        type:'text',
    },{
        label:'what are your favourite movies from the following?',
        fieldName:'favouriteMovieFromFollowing',
        required: true,
        type:'checkbox',
        options:[
            'The Shawshank Redemption','The Godfather','The Dark Knight','The Godfather: Part II','The Lord of the Rings: The Return of the King','Pulp Fiction','Schindler\'s List','12 Angry'
        ]
    }

]