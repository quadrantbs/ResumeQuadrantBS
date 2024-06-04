// Get the elements that will be used to trigger the appearance changes
const toggleButtons = document.querySelectorAll('.toggle-button');
const sections = document.querySelectorAll('.cv-section');

// Add click event listeners to each toggle button
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the active class on the button to change its appearance
    button.classList.toggle('active');

    // Toggle the hidden class on the corresponding section to show or hide it
    const sectionId = button.dataset.section;
    const section = document.querySelector(`#${sectionId}`);
    section.classList.toggle('hidden');
  });
});
