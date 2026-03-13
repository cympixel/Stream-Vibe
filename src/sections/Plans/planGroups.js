const planGroups = [
    {
        title:'Monthly',
        isActive:true,
        items:[
            {
                title:'Basic Plan', 
                description:'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.', 
                price:{
                    value:'$9.99',
                    period:'/month'
                }
            },
            {
                title:'Standard Plan', 
                description:'Access to a wider selection of movies and shows, including most new releases and exclusive content', 
                price:{
                    value:'$12.99',
                    period:'/month'
                }
            },
            {
                title:'Premium Plan', 
                description:'Access to a widest selection of movies and shows, including all new releases and Offline Viewing', 
                price:{
                    value:'$14.99',
                    period:'/month'
                }
            }
        ]
    },
    {
        title:'Yearly',
        
        items:[
            {
                title:'Basic Plan', 
                description:'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.', 
                price:{
                    value:'$39.99',
                    period:'/year'
                }
            },
            {
                title:'Standard Plan', 
                description:'Access to a wider selection of movies and shows, including most new releases and exclusive content', 
                price:{
                    value:'$48.99',
                    period:'/year'
                }
            },
            {
                title:'Premium Plan', 
                description:'Access to a widest selection of movies and shows, including all new releases and Offline Viewing', 
                price:{
                    value:'$54.99',
                    period:'/year'
                }
            }
        ]
    }
]

export default planGroups