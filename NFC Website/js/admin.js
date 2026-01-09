// 1. Sidebar Navigation Logic
function switchTab(tabId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all sidebar items
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    document.getElementById(tabId).classList.add('active');
    
    // Highlight clicked menu item (Find the li that triggered this)
    // Note: In a real app we'd pass 'this' or use event listeners, 
    // but for this simple setup we loop to find the match.
    // Simulating "Add Active" visually:
    event.currentTarget.classList.add('active');

    // Update Title
    const titles = {
        'overview': 'Dashboard Overview',
        'matches': 'Match Center Manager',
        'teams': 'Team & Player Management',
        'gallery': 'Gallery Uploads',
        'sponsors': 'Sponsor Management'
    };
    document.getElementById('pageTitle').innerText = titles[tabId];
}

// 2. Status Banner Logic
function setStatus(status) {
    // Reset all buttons
    const buttons = document.querySelectorAll('.status-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Activate clicked button
    const clickedBtn = document.querySelector(`.status-btn.${status}`);
    clickedBtn.classList.add('active');

    // Update Text Feedback
    const msg = document.getElementById('statusMessage');
    if(status === 'green') {
        msg.innerText = "Current Status: Matches are ON (Banner is Green)";
        msg.style.color = "green";
    } else if (status === 'yellow') {
        msg.innerText = "Current Status: Inspection Planned (Banner is Yellow)";
        msg.style.color = "#fbc02d";
    } else {
        msg.innerText = "Current Status: Matches CANCELLED (Banner is Red)";
        msg.style.color = "red";
    }
    
    // In a real app, this would send an AJAX/Fetch request to the database
    // alert("Status updated to " + status);
}

// 3. Mock Save Buttons
const saveBtns = document.querySelectorAll('.btn-save');
saveBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Simulate a loading state
        const originalText = btn.innerText;
        btn.innerText = "Saving...";
        btn.style.opacity = "0.7";
        
        setTimeout(() => {
            btn.innerText = "Saved!";
            btn.style.background = "#4caf50";
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.opacity = "1";
                btn.style.background = ""; // Reset to CSS default
            }, 2000);
        }, 800);
    });
});

// Function to visually highlight the Trophy option
function toggleTrophyIcon() {
    const status = document.getElementById('resultStatus').value;
    const selectBox = document.getElementById('resultStatus');
    
    if(status === 'winner') {
        selectBox.style.borderColor = '#FFD700'; // Gold border
        selectBox.style.backgroundColor = '#fff9c4'; // Light yellow bg
    } else if (status === 'runner_up') {
        selectBox.style.borderColor = '#C0C0C0'; // Silver border
        selectBox.style.backgroundColor = '#f5f5f5'; // Light gray bg
    } else {
        selectBox.style.borderColor = '#ddd';
        selectBox.style.backgroundColor = '#fff';
    }
}