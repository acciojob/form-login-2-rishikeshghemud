//your JS code here. If required.

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const firstName = document.querySelector('#firstName');
	const lastName = document.querySelector('#lastName');
	const phoneNumber = document.querySelector('#phoneNumber');
	const email = document.querySelector('#email');

	alert(
			`${firstName.name}: ${firstName.value} ${lastName.name}: ${lastName.value} ${phoneNumber.name}: ${phoneNumber.value} ${email.name}: ${email.value}`
		 )
})