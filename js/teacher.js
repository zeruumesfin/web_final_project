document.getElementById('teacherLoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/teachers/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObject)
        });

        if (response.ok) {
            const data = await response.json();
            alert(`Login successful for teacher: ${data.firstName} ${data.lastName}`);
            window.location.href = 'teacherProfile.html';
        } else {
            const errorData = await response.json();
            alert(`Login failed: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
    }
});

async function fetchTeacherProfile() {
    try {
        const response = await fetch('/teachers/profile');
        if (response.ok) {
            const data = await response.json();
            document.getElementById('teacherProfile').innerText = JSON.stringify(data, null, 2);
        } else {
            const errorData = await response.json();
            alert(`Failed to fetch profile: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the profile.');
    }
}

document.addEventListener('DOMContentLoaded', fetchTeacherProfile);
