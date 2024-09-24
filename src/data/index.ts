export const plans: {
    rank: "Arcade" | "Advanced" | "Pro",
    price: {
        mo: number,
        yr: number
    },
}[] = [
        {
            rank: "Arcade",
            price: {
                mo: 9,
                yr: 90
            },
        },
        {
            rank: "Advanced",
            price: {
                mo: 12,
                yr: 120
            },
        },
        {
            rank: "Pro",
            price: {
                mo: 15,
                yr: 150
            },
        },
    ];

export const addOns: {
    title: string,
    description: string;
    price: {
        mo: number,
        yr: number
    }
}[] = [
        {
            title: "Online service",
            description: "Access to multiplayer games",
            price: {
                mo: 1,
                yr: 10,
            }
        },
        {
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            price: {
                mo: 2,
                yr: 20,
            }
        },
        {
            title: "Customizable Profile",
            description: "Custom theme on your profile",
            price: {
                mo: 2,
                yr: 20,
            }
        }
    ]