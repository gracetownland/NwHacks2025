// rewards.ts
export const rewardsData = {
     featured: [
       {
         id: 1,
         title: "Amazon Gift Card",
         points: 500,
         value: "$10",
         description: "Redeem for an Amazon e-gift card. Valid for any purchase on Amazon.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Amazon",
         demand: "high",
         stock: 50,
       },
       {
         id: 2,
         title: "VIP Concert Access",
         points: 2000,
         value: "Priority",
         description: "Skip the line at selected Ticketmaster events and get exclusive access.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Ticketmaster",
         demand: "medium",
         stock: 25,
       },
       {
         id: 3,
         title: "Premium Spotify 3-Month",
         points: 1500,
         value: "$30",
         description: "Get 3 months of Spotify Premium. Ad-free music streaming.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Spotify",
         demand: "high",
         stock: 100,
       }
     ],
     giftCards: [
       {
         id: 4,
         title: "Temu Gift Card",
         points: 100,
         value: "$10",
         description: "Shop at Temu with this digital gift card. Wide selection of products.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Temu",
         demand: "low",
         stock: 100,
       },
       {
         id: 5,
         title: "Starbucks Gift Card",
         points: 300,
         value: "$15",
         description: "Enjoy your favorite beverages at any Starbucks location.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Starbucks",
         demand: "medium",
         stock: 75,
       },
       {
         id: 6,
         title: "Netflix Gift Card",
         points: 800,
         value: "$25",
         description: "Stream your favorite shows and movies with Netflix credit.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Netflix",
         demand: "high",
         stock: 40,
       }
     ],
     experiences: [
       {
         id: 7,
         title: "Local Food Tour",
         points: 1500,
         value: "$75",
         description: "3-hour guided food tour of local restaurants. Taste the best local cuisine.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Local Food Tours Co.",
         demand: "medium",
         stock: 10,
       },
       {
         id: 8,
         title: "Cooking Class",
         points: 2000,
         value: "$100",
         description: "2-hour cooking class with a professional chef. Learn new recipes.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Culinary Institute",
         demand: "high",
         stock: 15,
       },
       {
         id: 9,
         title: "Wine Tasting",
         points: 1200,
         value: "$60",
         description: "Exclusive wine tasting experience at local vineyard.",
         image: "/placeholder.svg?height=200&width=200",
         sponsor: "Valley Vineyards",
         demand: "medium",
         stock: 20,
       }
     ]
   };
   
   // progress.ts
   export const userProgress = {
     currentLevel: 3,
     nextLevel: 4,
     currentPoints: 4000,
     pointsToNextLevel: 6000,
     eventsNeeded: 2,
     eventsCompleted: 8,
     totalEventsNeeded: 10,
     rewards: {
       redeemed: 5,
       available: 9,
     },
     achievements: [
       { name: "First Event", completed: true },
       { name: "Social Butterfly", completed: true },
       { name: "Book Lover", completed: true },
       { name: "Community Leader", completed: false },
     ],
     levelBenefits: {
       current: [
         "Access to exclusive events",
         "Priority booking",
         "Bonus points on referrals"
       ],
       next: [
         "VIP event access",
         "Double points on weekends",
         "Custom event creation",
         "Early access to rewards"
       ]
     }
   };