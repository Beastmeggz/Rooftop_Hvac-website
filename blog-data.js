const blogPosts = [
    {
        id: 1,
        title: "Basketball Gym Ductwork Installation",
        date: "June 17, 2025",
        location: "Dover, New Jersey",
        category: "Ductwork Installation",
        description: "Finishing up some ductwork for a basketball gym. We dropped 16\" flex duct to our concentric ductwork and mounted the diffusers flush with the finished ceiling. Test ran units in both heat and A/C. Hoping students can enjoy this gym for years to come!",
        images: [
            "./assets/gym-ductwork-1.jpg",
            "./assets/gym-ductwork-2.jpg",
            "./assets/gym-ductwork-3.jpg",
            "./assets/gym-ductwork-4.jpg",
            "./assets/gym-ductwork-5.jpg",
            "./assets/gym-ductwork-6.jpg"
        ],
        thumbnail: "./assets/gym-ductwork-1.jpg"
    },
    {
        id: 2,
        title: "Modular School Building Mini-Split Installation",
        date: "May 19, 2025",
        location: "North Jersey",
        category: "Mini-Split Systems",
        description: "Productive few days up in North Jersey installing some splits for a modular school building. Professional installation of mini-split systems for commercial education facility.",
        images: [
            "./assets/school-minisplit-1.jpg",
            "./assets/school-minisplit-2.jpg",
            "./assets/school-minisplit-3.jpg",
            "./assets/school-minisplit-4.jpg",
            "./assets/school-minisplit-5.jpg"
        ],
        thumbnail: "./assets/school-minisplit-1.jpg"
    },
    {
        id: 3,
        title: "Rooftop Equipment Installation",
        date: "May 11, 2025",
        location: "Millville, New Jersey",
        category: "Equipment Installation",
        description: "Professional installation of rooftop HVAC equipment. Daiken and Carrier units installed for optimal performance and efficiency.",
        images: [
            "./assets/rooftop-equipment-1.jpg",
            "./assets/rooftop-equipment-2.jpg",
            "./assets/rooftop-equipment-3.jpg",
            "./assets/rooftop-equipment-4.jpg",
            "./assets/rooftop-equipment-5.jpg"
        ],
        thumbnail: "./assets/rooftop-equipment-1.jpg"
    },
    {
        id: 4,
        title: "Heat Exchanger Replacement - Winter Emergency",
        date: "February 24, 2025",
        location: "Burlington, New Jersey",
        category: "Emergency Service",
        description: "Before and after from a defective heat exchanger replacement. Getting the job done in challenging winter conditions to restore heating to our customer.",
        images: [
            "./assets/heat-exchanger-1.jpg",
            "./assets/heat-exchanger-2.jpg",
            "./assets/heat-exchanger-3.jpg",
            "./assets/heat-exchanger-4.jpg",
            "./assets/heat-exchanger-5.jpg"
        ],
        thumbnail: "./assets/heat-exchanger-1.jpg"
    },
    {
        id: 5,
        title: "York Control Board (UCB) Replacement",
        date: "December 5, 2024",
        location: "Moorestown, New Jersey",
        category: "Control Systems",
        description: "Replaced a UCB (universal control board) for a 7.5 ton York unit. Commissioned the new board and set proper parameters, returning heat back to customer quickly.",
        images: [
            "./assets/york-control-1.jpg",
            "./assets/york-control-2.jpg",
            "./assets/york-control-3.jpg"
        ],
        thumbnail: "./assets/york-control-1.jpg"
    },
    {
        id: 6,
        title: "Equipment Upgrade - Daiken & Carrier Swap",
        date: "October 6, 2024",
        location: "Mount Laurel, New Jersey",
        category: "System Upgrade",
        description: "Out with the old, in with the new. Complete equipment replacement and upgrade with industry-leading Daiken and Carrier units. Professional rigging and installation.",
        images: [
            "./assets/equipment-swap-1.jpg",
            "./assets/equipment-swap-2.jpg",
            "./assets/equipment-swap-3.jpg",
            "./assets/equipment-swap-4.jpg",
            "./assets/equipment-swap-5.jpg"
        ],
        thumbnail: "./assets/equipment-swap-1.jpg"
    },
    {
        id: 7,
        title: "York RTU Inducer Replacement - Heating Season Prep",
        date: "September 29, 2024",
        location: "Mount Laurel, New Jersey",
        category: "System Maintenance",
        description: "Before and after shots of the inducer we replaced on a 3 ton York RTU. Cleaned the pilot crossover tube and test ran heating system before heating season.",
        images: [
            "./assets/york-rtu-1.jpg",
            "./assets/york-rtu-2.jpg",
            "./assets/york-rtu-3.jpg",
            "./assets/york-rtu-4.jpg"
        ],
        thumbnail: "./assets/york-rtu-1.jpg"
    },
    {
        id: 8,
        title: "Low Voltage Short Repair - 3 Ton RTU",
        date: "September 19, 2024",
        location: "West Grove, Pennsylvania",
        category: "Repair Service",
        description: "Service call addressing a low voltage short on a 3 ton RTU. Quickly diagnosed and repaired electrical issue to restore cooling functionality.",
        images: [
            "./assets/lowvoltage-repair-1.jpg"
        ],
        thumbnail: "./assets/lowvoltage-repair-1.jpg"
    },
    {
        id: 9,
        title: "Complete Medical Office HVAC Installation",
        date: "September 10, 2024",
        location: "Vineland, New Jersey",
        category: "Commercial Installation",
        description: "Complete HVAC installation for medical office. Removed old equipment from attic and installed new furnace, A-Coil, and condenser with full electrical connections and testing.",
        images: [
            "./assets/medical-office-1.jpg",
            "./assets/medical-office-2.jpg",
            "./assets/medical-office-3.jpg",
            "./assets/medical-office-4.jpg",
            "./assets/medical-office-5.jpg",
            "./assets/medical-office-6.jpg",
            "./assets/medical-office-7.jpg"
        ],
        thumbnail: "./assets/medical-office-1.jpg"
    },
    {
        id: 10,
        title: "Condenser Fan Motor Replacement",
        date: "September 2, 2024",
        location: "Philadelphia, Pennsylvania",
        category: "Component Replacement",
        description: "Condenser fan motor replacement to restore cooling capacity. Professional diagnosis and replacement of failed motor component.",
        images: [
            "./assets/condenser-motor-1.jpg",
            "./assets/condenser-motor-2.jpg",
            "./assets/condenser-motor-3.jpg"
        ],
        thumbnail: "./assets/condenser-motor-1.jpg"
    },
    {
        id: 11,
        title: "Dual Shaft Blower Motor Replacement",
        date: "August 27, 2024",
        location: "New Jersey",
        category: "Component Replacement",
        description: "Replaced a dual shaft blower motor for a customer. Quick turnaround to restore heating and cooling distribution throughout facility.",
        images: [
            "./assets/blower-motor-1.jpg",
            "./assets/blower-motor-2.jpg",
            "./assets/blower-motor-3.jpg"
        ],
        thumbnail: "./assets/blower-motor-1.jpg"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogPosts;
}
