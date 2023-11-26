



const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

document.addEventListener('DOMContentLoaded', function () {
    const transferMoneyLink = document.querySelector('.side-menu li:nth-child(2) a'); // Adjust the selector based on your actual structure
    const transferMoneySection = document.getElementById('transfer-money-section');
    const sidebarLinks = document.querySelectorAll('.side-menu li a');

    // Function to hide the Transfer Money section
    function hideTransferMoneySection() {
        transferMoneySection.style.display = 'none';
    }

    // Add click event listeners to all sidebar links
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Hide Transfer Money section when clicking on any sidebar link
            hideTransferMoneySection();

            // If the clicked link is the Transfer Money link, prevent the default behavior
            // to avoid navigating to a new page (if "#" is used as a placeholder href)
            if (link === transferMoneyLink) {
                event.preventDefault();
            }
        });
    });

    // Add click event listener to the Transfer Money link
    transferMoneyLink.addEventListener('click', function (event) {
        // Prevent the default behavior to avoid navigating to a new page
        event.preventDefault();

        // Show the Transfer Money section
        transferMoneySection.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const withdrawMoneyLink = document.querySelector('.side-menu li:nth-child(3) a'); // Adjust the selector based on your actual structure
    const withdrawMoneySection = document.getElementById('withdraw-money-section');
    const sidebarLinks = document.querySelectorAll('.side-menu li a');

    // Function to hide the Transfer Money section
    function hideWithdrawMoneySection() {
        withdrawMoneySection.style.display = 'none';
    }

    // Add click event listeners to all sidebar links
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Hide Transfer Money section when clicking on any sidebar link
            hideWithdrawMoneySection();

            // If the clicked link is the Transfer Money link, prevent the default behavior
            // to avoid navigating to a new page (if "#" is used as a placeholder href)
            if (link === withdrawMoneyLink) {
                event.preventDefault();
            }
        });
    });

    // Add click event listener to the Transfer Money link
    withdrawMoneyLink.addEventListener('click', function (event) {
        // Prevent the default behavior to avoid navigating to a new page
        event.preventDefault();

        // Show the Transfer Money section
        withdrawMoneySection.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const transferMoneyLink = document.querySelector('.side-menu li:nth-child(2) a');
    const transferMoneySection = document.getElementById('transfer-money-section');
    const countrySelect = document.getElementById('country');
    const bankSelect = document.getElementById('bank');

    // Function to fetch countries from the Rest Countries API
    async function fetchCountries() {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countries = await response.json();
            return countries.map(country => ({
                code: country.cca2.toLowerCase(),
                name: country.name.common
            }));
        } catch (error) {
            console.error('Error fetching countries:', error);
            return [];
        }
    }

    // Function to fetch banks from the Open Bank Project API
    async function fetchBanks(countryCode) {
        try {
            const response = await fetch(`https://api.openbankproject.com/obp/v4.0.0/banks/${countryCode}`);
            const banks = await response.json();
            return banks.map(bank => ({
                code: bank.id.toLowerCase(),
                name: bank.short_name
            }));
        } catch (error) {
            console.error('Error fetching banks:', error);
            return [];
        }
    }

    // Function to populate the country dropdown
    async function populateCountryDropdown() {
        const countries = await fetchCountries();
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.text = country.name;
            countrySelect.appendChild(option);
        });
    }

    // Function to populate the bank dropdown based on the selected country
    async function populateBankDropdown(selectedCountry) {
        // Clear existing options
        bankSelect.innerHTML = '';

        // Get banks for the selected country
        const banks = await fetchBanks(selectedCountry);

        // Populate the bank dropdown
        banks.forEach(bank => {
            const option = document.createElement('option');
            option.value = bank.code.toLowerCase();
            option.text = bank.name;
            bankSelect.appendChild(option);
        });
    }

    // Add change event listener to the country dropdown
    countrySelect.addEventListener('change', function () {
        const selectedCountry = countrySelect.value;
        populateBankDropdown(selectedCountry);
    });

    // Add click event listener to the Transfer Money link
    transferMoneyLink.addEventListener('click', function (event) {
        event.preventDefault();
        transferMoneySection.style.display = 'block';

        // Populate the country dropdown when the Transfer Money section is shown
        populateCountryDropdown();
    });
});

// Get the elements needed for breadcrumb manipulation
const breadcrumb = document.getElementById('breadcrumb');
const sidebarLinks = document.querySelectorAll('.side-menu a');

// Add click event listeners to sidebar links
sidebarLinks.forEach(link => {
	link.addEventListener('click', function (event) {
		// Prevent the default link behavior
		event.preventDefault();

		// Get the text content of the clicked link
		const linkText = this.querySelector('.text').textContent;

		// Update the breadcrumb based on the clicked link
		breadcrumb.innerHTML = `
			<li>
				<a class="active" href="index.html">Home</a>
			</li>
			<li><i class='bx bx-chevron-right' ></i></li>
			<li>
				<a  href="#">${linkText}</a>
			</li>
		`;

		// You can add additional logic or functions here based on the clicked link
	});
});

const withdrawalTypeSelect = document.getElementById('withdrawal_type');
	const mobileMoneyOperators = document.getElementById('mobileMoneyOperators');

	withdrawalTypeSelect.addEventListener('change', function () {
		// Show/hide the mobile money operators select based on the selected value
		mobileMoneyOperators.style.display = this.value === 'Mobile_Money' ? 'block' : 'none';
	});
