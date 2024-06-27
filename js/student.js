document.addEventListener('DOMContentLoaded', () => {
    const studentTableBody = document.getElementById('studentTableBody');

    fetch('http://localhost:3000/students')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Student data:', data);
            studentTableBody.innerHTML = ''; 
            data.forEach(student => {
                const row = document.createElement('tr');

                const fullNameCell = document.createElement('td');
                fullNameCell.textContent = `${student.firstName} ${student.middleName} ${student.lastName}`;
                row.appendChild(fullNameCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = student.email;
                row.appendChild(emailCell);

                const dobCell = document.createElement('td');
                dobCell.textContent = new Date(student.dateOfBirth).toLocaleDateString();
                row.appendChild(dobCell);

                const genderCell = document.createElement('td');
                genderCell.textContent = student.gender;
                row.appendChild(genderCell);

                const phoneNumberCell = document.createElement('td');
                phoneNumberCell.textContent = student.phoneNumber;
                row.appendChild(phoneNumberCell);

                studentTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching student data:', error);
        });
});
