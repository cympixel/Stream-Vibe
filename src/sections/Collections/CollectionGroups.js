import categoryItems from "../Categories/categoryItems"

const collectionGroup = [
    {
        isActive:true,
        title:'Movies',
        items:[
            {
                title:'Our Genres',
                categoryItems
            },
            {
                title:'Popular Top 10 In Genres',
                sliderParams:{
                    // От 0 и до следующего брекпоинта
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    loop:false,
                    
                    // Следующий брекпоинт
                    breakpoints: {
                        481: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                        
                        },
                        1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 20,
                        
                        },
                        1441: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 30,
                        
                        },
                    }
                    },
                categoryItems:[
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                ]
            },
            {
                title:'Trending Now',   
                movieItems:[
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/1.jpg',
                        duration:'1h 30min',
                        views:'2K'
                    },
                    {
                        title:'Kisi',
                        imgSrc:'/src/assets/images/movies/2.jpg',
                        duration:'1h 34min',
                        views:'4K'
                    },
                    {
                        title:'Mangal',
                        imgSrc:'/src/assets/images/movies/3.jpg',
                        duration:'1h 20min',
                        views:'5K'
                    },
                    {
                        title:'Pathan',
                        imgSrc:'/src/assets/images/movies/4.jpg',
                        duration:'2h',
                        views:'3K'
                    },
                    
                    
                    {
                        title:'Ant-Man',
                        imgSrc:'/src/assets/images/movies/5.jpg',
                        duration:'1h 42min',
                        views:'6K'
                    },
                      {
                        title:'Mangal',
                        imgSrc:'/src/assets/images/movies/3.jpg',
                        duration:'1h 20min',
                        views:'5K'
                    },
                    {
                        title:'Pathan',
                        imgSrc:'/src/assets/images/movies/4.jpg',
                        duration:'2h',
                        views:'3K'
                    },
                    {
                        title:'Ant-Man',
                        imgSrc:'/src/assets/images/movies/5.jpg',
                        duration:'1h 42min',
                        views:'6K'
                    },
                    {
                        title:'Pathan',
                        imgSrc:'/src/assets/images/movies/4.jpg',
                        duration:'2h',
                        views:'3K'
                    },
                    {
                        title:'Ant-Man',
                        imgSrc:'/src/assets/images/movies/5.jpg',
                        duration:'1h 42min',
                        views:'6K'
                    },
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/1.jpg',
                        duration:'1h 30min',
                        views:'2K'
                    },
                    {
                        title:'Kisi',
                        imgSrc:'/src/assets/images/movies/2.jpg',
                        duration:'1h 34min',
                        views:'4K'
                    },
                    {
                        title:'Pathan',
                        imgSrc:'/src/assets/images/movies/4.jpg',
                        duration:'2h',
                        views:'3K'
                    },
                    {
                        title:'Ant-Man',
                        imgSrc:'/src/assets/images/movies/5.jpg',
                        duration:'1h 42min',
                        views:'6K'
                    },
                    {
                        title:'Pathan',
                        imgSrc:'/src/assets/images/movies/4.jpg',
                        duration:'2h',
                        views:'3K'
                    },
                    {
                        title:'Ant-Man',
                        imgSrc:'/src/assets/images/movies/5.jpg',
                        duration:'1h 42min',
                        views:'6K'
                    },
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/1.jpg',
                        duration:'1h 30min',
                        views:'2K'
                    },
                    {
                        title:'Kisi',
                        imgSrc:'/src/assets/images/movies/2.jpg',
                        duration:'1h 34min',
                        views:'4K'
                    },
                ]
            },
            {
                title:'New Releases',
                movieItems:[
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/1.jpg',
                        released:{
                            label:'14 April 2023',
                            dateTime:'2023-04-14'
                        }
                    },
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/2.jpg',
                        released:{
                            label:'22 April 2023',
                            dateTime:'2023-04-22'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/3.jpg',
                        released:{
                            label:'13 April 2023',
                            dateTime:'2023-04-13'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/4.jpg',
                        released:{
                            label:'19 April 2023',
                            dateTime:'2023-04-19'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/5.jpg',
                        released:{
                            label:'11 April 2023',
                            dateTime:'2023-04-11'
                        }
                    },    
                    
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/1.jpg',
                        released:{
                            label:'14 April 2023',
                            dateTime:'2023-04-14'
                        }
                    },
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/2.jpg',
                        released:{
                            label:'22 April 2023',
                            dateTime:'2023-04-22'
                        }
                    }, 
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/3.jpg',
                        released:{
                            label:'13 April 2023',
                            dateTime:'2023-04-13'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/4.jpg',
                        released:{
                            label:'19 April 2023',
                            dateTime:'2023-04-19'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/5.jpg',
                        released:{
                            label:'11 April 2023',
                            dateTime:'2023-04-11'
                        }
                    },    
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/3.jpg',
                        released:{
                            label:'13 April 2023',
                            dateTime:'2023-04-13'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/4.jpg',
                        released:{
                            label:'19 April 2023',
                            dateTime:'2023-04-19'
                        }
                    },
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/5.jpg',
                        released:{
                            label:'11 April 2023',
                            dateTime:'2023-04-11'
                        }
                    },    
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/3.jpg',
                        released:{
                            label:'13 April 2023',
                            dateTime:'2023-04-13'
                        }
                    }, 
                      
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/3.jpg',
                        released:{
                            label:'13 April 2023',
                            dateTime:'2023-04-13'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/4.jpg',
                        released:{
                            label:'19 April 2023',
                            dateTime:'2023-04-19'
                        }
                    },  
                    {
                        title:'Morbius',
                        imgSrc:'/src/assets/images/movies/releases/5.jpg',
                        released:{
                            label:'11 April 2023',
                            dateTime:'2023-04-11'
                        }
                    },  
                    
                ]
            },
            {
                title:'Must - Watch Movies',
                movieItems:[
                    {
                        title:'Kantara',
                        imgSrc:'/src/assets/images/movies/must-watch/1.jpg',
                        duration:'1h 57min',
                        rating:{
                            value:4.5,
                            label:'20K'
                        }
                    },
                     {
                        title:'Pushpa 2',
                        imgSrc:'/src/assets/images/movies/must-watch/2.jpg',
                        duration:'1h 30min',
                        rating:{
                            value:4,
                            label:'30K'
                        }
                    },
                     {
                        title:'Blade Runner 2049',
                        imgSrc:'/src/assets/images/movies/must-watch/3.jpg',
                        duration:'1h 42min',
                        rating:{
                            value:4.5,
                            label:'220K'
                        }
                    },
                     {
                        title:'Adipurus',
                        imgSrc:'/src/assets/images/movies/must-watch/4.jpg',
                        duration:'2h 10min',
                        rating:{
                            value:3,
                            label:'10K'
                        }
                    },
                    {
                        title:'Kantara',
                        imgSrc:'/src/assets/images/movies/must-watch/1.jpg',
                        duration:'1h 57min',
                        rating:{
                            value:4.5,
                            label:'20K'
                        }
                    },
                     {
                        title:'Pushpa 2',
                        imgSrc:'/src/assets/images/movies/must-watch/2.jpg',
                        duration:'1h 30min',
                        rating:{
                            value:4,
                            label:'30K'
                        }
                    },
                     {
                        title:'Blade Runner 2049',
                        imgSrc:'/src/assets/images/movies/must-watch/3.jpg',
                        duration:'1h 42min',
                        rating:{
                            value:4.5,
                            label:'220K'
                        }
                    },
                     {
                        title:'Adipurus',
                        imgSrc:'/src/assets/images/movies/must-watch/4.jpg',
                        duration:'2h 10min',
                        rating:{
                            value:3,
                            label:'10K'
                        }
                    },
                    {
                        title:'Kantara',
                        imgSrc:'/src/assets/images/movies/must-watch/1.jpg',
                        duration:'1h 57min',
                        rating:{
                            value:4.5,
                            label:'20K'
                        }
                    },
                     {
                        title:'Pushpa 2',
                        imgSrc:'/src/assets/images/movies/must-watch/2.jpg',
                        duration:'1h 30min',
                        rating:{
                            value:4,
                            label:'30K'
                        }
                    },
                     {
                        title:'Blade Runner 2049',
                        imgSrc:'/src/assets/images/movies/must-watch/3.jpg',
                        duration:'1h 42min',
                        rating:{
                            value:4.5,
                            label:'220K'
                        }
                    },
                     {
                        title:'Adipurus',
                        imgSrc:'/src/assets/images/movies/must-watch/4.jpg',
                        duration:'2h 10min',
                        rating:{
                            value:3,
                            label:'10K'
                        }
                    },
                    
                ],
                sliderParams:{
                    // От 0 и до следующего брекпоинта
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    loop:false,
                    
                    // Следующий брекпоинт
                    breakpoints: {
                        481: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        1024: {
                        slidesPerView: 3.7,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                        
                        },
                        1441: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 30,
                        
                        },
                    }
                    }
            },
        ]
    },
    {
        title:'Shows',
        items:[
            {
                title:'Our Show Genres',
                categoryItems
            },
            {
                title:'Popular Top 10 In Show Genres',
                sliderParams:{
                    // От 0 и до следующего брекпоинта
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    loop:false,
                    
                    // Следующий брекпоинт
                    breakpoints: {
                        481: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                        
                        },
                        1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 20,
                        
                        },
                        1441: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 30,
                        
                        },
                    }
                    },
                categoryItems:[
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                    {
                    title:'Action',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/action/1.jpg',
                        '/src/assets/images/categories/action/2.jpg',
                        '/src/assets/images/categories/action/3.jpg',
                        '/src/assets/images/categories/action/4.jpg'  
                    ]
                    },
                    {
                    title:'Adventure',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/adventure/1.jpg',
                        '/src/assets/images/categories/adventure/2.jpg',
                        '/src/assets/images/categories/adventure/3.jpg',
                        '/src/assets/images/categories/adventure/4.jpg'  
                    ]
                    },
                    {
                    title:'Comedy',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/comedy/1.jpg',
                        '/src/assets/images/categories/comedy/2.jpg',
                        '/src/assets/images/categories/comedy/3.jpg',
                        '/src/assets/images/categories/comedy/4.jpg'  
                    ]
                    },
                    {
                    title:'Drama',
                    badge:"Top 10 In",
                    images:[
                        '/src/assets/images/categories/drama/1.jpg',
                        '/src/assets/images/categories/drama/2.jpg',
                        '/src/assets/images/categories/drama/3.jpg',
                        '/src/assets/images/categories/drama/4.jpg'  
                    ]
                    },
                ]
            },
            {
                title:'Trending Shows Now',
                movieItems:[
                    {
                        title:'Stranger Things',
                        imgSrc:'/src/assets/images/shows/trending/1.jpg',
                        duration:'8h 20min',
                        season:'4 Season',
                        href:'/show'
                    },
                    {
                        title:'Money Heist',
                        imgSrc:'/src/assets/images/shows/trending/2.jpg',
                        duration:'12h 30min',
                        season:'5 Season',
                        href:'/show'
                    },
                    {
                        title:'Lucifer',
                        imgSrc:'/src/assets/images/shows/trending/3.jpg',
                        duration:'14h 30min',
                        season:'3 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/trending/4.jpg',
                        duration:'7h 30min',
                        season:'2 Season',
                        href:'/show'
                    },
                      {
                        title:'Stranger Things',
                        imgSrc:'/src/assets/images/shows/trending/1.jpg',
                        duration:'8h 20min',
                        season:'4 Season',
                        href:'/show'
                    },
                    {
                        title:'Money Heist',
                        imgSrc:'/src/assets/images/shows/trending/2.jpg',
                        duration:'12h 30min',
                        season:'5 Season',
                        href:'/show'
                    },
                    {
                        title:'Lucifer',
                        imgSrc:'/src/assets/images/shows/trending/3.jpg',
                        duration:'14h 30min',
                        season:'3 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/trending/4.jpg',
                        duration:'7h 30min',
                        season:'2 Season',
                        href:'/show'
                    },
                      {
                        title:'Stranger Things',
                        imgSrc:'/src/assets/images/shows/trending/1.jpg',
                        duration:'8h 20min',
                        season:'4 Season',
                        href:'/show'
                    },
                    {
                        title:'Money Heist',
                        imgSrc:'/src/assets/images/shows/trending/2.jpg',
                        duration:'12h 30min',
                        season:'5 Season',
                        href:'/show'
                    },
                    {
                        title:'Lucifer',
                        imgSrc:'/src/assets/images/shows/trending/3.jpg',
                        duration:'14h 30min',
                        season:'3 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/trending/4.jpg',
                        duration:'7h 30min',
                        season:'2 Season',
                        href:'/show'
                    },
                      {
                        title:'Stranger Things',
                        imgSrc:'/src/assets/images/shows/trending/1.jpg',
                        duration:'8h 20min',
                        season:'4 Season',
                        href:'/show'
                    },
                    {
                        title:'Money Heist',
                        imgSrc:'/src/assets/images/shows/trending/2.jpg',
                        duration:'12h 30min',
                        season:'5 Season',
                        href:'/show'
                    },
                    {
                        title:'Lucifer',
                        imgSrc:'/src/assets/images/shows/trending/3.jpg',
                        duration:'14h 30min',
                        season:'3 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/trending/4.jpg',
                        duration:'7h 30min',
                        season:'2 Season',
                        href:'/show'
                    },
                    
                ],
                sliderParams:{
                    // От 0 и до следующего брекпоинта
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    loop:false,
                    
                    // Следующий брекпоинт
                    breakpoints: {
                        481: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        1024: {
                        slidesPerView: 3.7,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                        
                        },
                        1441: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 30,
                        
                        },
                    }
                    }
            },
            {
                title:'New Released Shows',
                movieItems:[
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/1.jpg',
                        duration:'12h 23min',
                        season:'5 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/2.jpg',
                        duration:'7h 40min',
                        season:'2 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/3.jpg',
                        duration:'8h 20min',
                        season:'4 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/4.jpg',
                        duration:'10h 30min',
                        season:'3 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/1.jpg',
                        duration:'12h 23min',
                        season:'5 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/2.jpg',
                        duration:'7h 40min',
                        season:'2 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/3.jpg',
                        duration:'8h 20min',
                        season:'4 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/4.jpg',
                        duration:'10h 30min',
                        season:'3 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/1.jpg',
                        duration:'12h 23min',
                        season:'5 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/2.jpg',
                        duration:'7h 40min',
                        season:'2 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/3.jpg',
                        duration:'8h 20min',
                        season:'4 Season',
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/new/4.jpg',
                        duration:'10h 30min',
                        season:'3 Season',
                        href:'/show'
                    },
                ],
                sliderParams:{
                    // От 0 и до следующего брекпоинта
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    loop:false,
                    
                    // Следующий брекпоинт
                    breakpoints: {
                        481: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        1024: {
                        slidesPerView: 3.7,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                        
                        },
                        1441: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 30,
                        
                        },
                    }
                    },
            },
            {
                title:'Must - Watch Shows',
                movieItems:[
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/1.jpg',
                        duration:'7h 40min',
                        rating:{
                            value:4.5,
                            label:'20K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/2.jpg',
                        duration:'12h 23min',
                        rating:{
                            value:5,
                            label:'203K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/3.jpg',
                        duration:'10h 30min',
                        rating:{
                            value:4,
                            label:'22K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/4.jpg',
                        duration:'8h 20min',
                        rating:{
                            value:5,
                            label:'230K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/1.jpg',
                        duration:'7h 40min',
                        rating:{
                            value:4.5,
                            label:'20K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/2.jpg',
                        duration:'12h 23min',
                        rating:{
                            value:5,
                            label:'203K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/3.jpg',
                        duration:'10h 30min',
                        rating:{
                            value:4,
                            label:'22K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/4.jpg',
                        duration:'8h 20min',
                        rating:{
                            value:5,
                            label:'230K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/1.jpg',
                        duration:'7h 40min',
                        rating:{
                            value:4.5,
                            label:'20K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/2.jpg',
                        duration:'12h 23min',
                        rating:{
                            value:5,
                            label:'203K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/3.jpg',
                        duration:'10h 30min',
                        rating:{
                            value:4,
                            label:'22K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/4.jpg',
                        duration:'8h 20min',
                        rating:{
                            value:5,
                            label:'230K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/1.jpg',
                        duration:'7h 40min',
                        rating:{
                            value:4.5,
                            label:'20K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/2.jpg',
                        duration:'12h 23min',
                        rating:{
                            value:5,
                            label:'203K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/3.jpg',
                        duration:'10h 30min',
                        rating:{
                            value:4,
                            label:'22K'
                        },
                        href:'/show'
                    },
                    {
                        title:'The Gray Man',
                        imgSrc:'/src/assets/images/shows/must-watch/4.jpg',
                        duration:'8h 20min',
                        rating:{
                            value:5,
                            label:'230K'
                        },
                        href:'/show'
                    },
                ],
                sliderParams:{
                    // От 0 и до следующего брекпоинта
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    loop:false,
                    
                    // Следующий брекпоинт
                    breakpoints: {
                        481: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        
                        },
                        1024: {
                        slidesPerView: 3.7,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                        
                        },
                        1441: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 30,
                        
                        },
                    }
                    },
            },
        ]
    },
    
]



export default collectionGroup