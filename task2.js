document.addEventListener('DOMContentLoaded', function () {
    // Fetch universities using Promise
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch('http://universities.hipolabs.com/search?country=United+States')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    };

    // Display universities
    const displayUniversities = (universitys) => {
        const universities = document.getElementById('universityList');
        if (universities) {
            universitys.forEach(university => {



                const listData = document.createElement('li');
                listData.classList.add('list-group-item');
                if (university.data) {
                    listData.textContent = `Name: ${university.name},
                    state-province: ${university.data.state-province || 'N/A'},
                    Domain: ${university.data.domains || 'N/A'},
                     `;
                  } 
                //   else {
                //     listData.textContent = `Name: ${university.name}, state-province: ${university.data.state-province || 'N/A'},  Data: N/A`;
                //   }

                // listItem.textContent = university.name;

                // const listItem1 = document.createElement('li');
                // listItem1.classList.add('list-group-item');
                // listItem1.textContent = university.state-province;

                universities.appendChild(listData);
                // universityList.appendChild(listItem);
                // universityList.appendChild(listItem1);
            });
    };
}

    // Fetch data and display universities
    fetchData()
        .then(data => displayUniversities(data))
        .catch(error => console.error('Error fetching data:', error));
});
