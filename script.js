document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
        let currentSlide = 0;
        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;

            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(-${currentSlide * 100}%)`;
            });
        }
        document.addEventListener('DOMContentLoaded', () => {
            showSlide(0);
            document.getElementById('prevBtn').addEventListener('click', () => showSlide(currentSlide - 1));
            document.getElementById('nextBtn').addEventListener('click', () => showSlide(currentSlide + 1));
        });
        
