const messages = [
    "Dooram unna parledu... cinema start ayyaka side seat lo nuvve 😌🎬",
    "Ni pina ottu theatre experince esta😆",
    "Theatre ledu ra ayya... kaani feeling matram full mass 😂❤️",
    "Miss aytunnam anukunnava? Call petti cinema play cheddam ra 😎",
    "Popcorn share cheyyalem... kaani reactions full share 😆🍿",
    "Interval lo tea kaadu... nee voice unte chaalu ra 🫶",
    "Hero entry kanna... nee call lift chesinappude whistles 😜🔥",
    "Seat numbers levu... kaani bonding matram front row 😌",
    "Dooram entha unna... WiFi undi kada, chillaipoddam 😂📶",
    "Cinema lo matladadam thappu... kaani nuvvu matladithe okay ra 😏",
    "Movie ayipoyina sare... call cut cheyadam kastam ra 😭❤️"
];

function showNotification() {
    console.log("Button clicked!"); 
    const container = document.getElementById('notification-area');

    if (!container) {
        console.error("Could not find notification-area div!");
        return;
    }

    const toast = document.createElement('div');
    toast.className = 'toast';

    // Pick from the "messages" array
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    toast.innerText = randomMsg;

    container.appendChild(toast);

    // Remove the toast after 5 seconds
    setTimeout(() => { 
        toast.style.opacity = '0';
        toast.style.transition = '0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}

// Optional: Also auto-show a message every 30 seconds
setInterval(showNotification, 30000);