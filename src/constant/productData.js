const productData = {
    "range": "'product data'!A1:Z1000",
    "majorDimension": "ROWS",
    "values": [
        [
            "1",
            "Wireless Bluetooth Earbuds",
            "High-quality sound, noise-cancelling",
            "https://images.unsplash.com/photo-1655804446276-7699884b469b?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "29.99",
            "Electronics"
        ],
        [
            "2",
            "Smart Fitness Watch",
            "Tracks heart rate, sleep, and steps",
            "https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "59.99",
            "Fitness"
        ],
        [
            "3",
            "Portable Phone Charger",
            "Fast charging, compact design",
            "https://images.unsplash.com/photo-1596877445530-ad74838754c6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "19.99",
            "Electronics"
        ],
        [
            "4",
            "4K Action Camera",
            "Waterproof, 4K video recording",
            "https://plus.unsplash.com/premium_photo-1710961233810-5350d81d4b20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "149.99",
            "Cameras & Drones"
        ],
        [
            "5",
            "Wireless Keyboard & Mouse",
            "Ergonomic, long battery life",
            "https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "39.99",
            "Accessories"
        ],
        [
            "6",
            "Gaming Headset",
            "Surround sound, noise-cancelling mic",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "79.99",
            "Gaming"
        ],
        [
            "7",
            "LED Desk Lamp",
            "Adjustable brightness, USB charging port",
            "https://plus.unsplash.com/premium_photo-1683436836549-02da98f20041?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "24.99",
            "Home Office"
        ],
        [
            "8",
            "Wireless Security Camera",
            "Night vision, motion detection",
            "https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "89.99",
            "Home Security"
        ],
        [
            "9",
            "Laptop Stand",
            "Adjustable, ergonomic design",
            "https://images.unsplash.com/photo-1525971977907-20d22da82d6f?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "35.99",
            "Accessories"
        ],
        [
            "10",
            "Smart Thermostat",
            "Energy-saving, voice control compatible",
            "https://images.unsplash.com/photo-1619140099965-06d74aaf51fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "129.99",
            "Smart Home"
        ],
        [
            "11",
            "Wireless Speaker",
            "Waterproof, 360-degree sound",
            "https://images.unsplash.com/photo-1650897877751-4446f52a0cb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "49.99",
            "Audio"
        ],
        [
            "12",
            "USB-C Hub",
            "6-in-1 hub for charging and data transfer",
            "https://images.unsplash.com/photo-1551818014-7c8ace9c1b5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "19.99",
            "Accessories"
        ],
        [
            "13",
            "HD Webcam",
            "1080p resolution, built-in microphone",
            "https://images.unsplash.com/photo-1614588876378-b2ffa4520c22?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "59.99",
            "Electronics"
        ],
        [
            "14",
            "Noise-Cancelling Headphones",
            "Over-ear, wireless, long battery life",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "129.99",
            "Audio"
        ]
    ]
}

export default productData