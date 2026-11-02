function highlightError(field, message) {
    field.style.border = "2px solid #d4af37";
    let errorSpan = field.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains("error-text")) {
        errorSpan = document.createElement("span");
        errorSpan.className = "error-text";
        errorSpan.style.color = "#d4af37";
        errorSpan.style.fontSize = "12px";
        errorSpan.style.display = "block";
        errorSpan.style.marginTop = "4px";
        field.parentNode.insertBefore(errorSpan, field.nextSibling);
    }
    errorSpan.textContent = message;
}

function clearError(field) {
    field.style.border = "";
    const errorSpan = field.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains("error-text")) {
        errorSpan.remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
   
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img-content");
    const lightboxClose = document.getElementById("lightbox-close");
    
    const galleryImages = document.querySelectorAll(".lightbox-img");
    
    if (galleryImages.length > 0 && lightboxModal && lightboxImg) {
        galleryImages.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                lightboxModal.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener("click", () => {
                lightboxModal.style.display = "none";
            });
        }

        lightboxModal.addEventListener("click", (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = "none";
            }
        });
    }

    const searchInput = document.getElementById("productSearchInput");
    
    if (searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const productBoxes = document.querySelectorAll(".product-box");

            productBoxes.forEach(box => {
                const boxText = box.textContent.toLowerCase();
                if (boxText.includes(searchTerm)) {
                    box.style.display = ""; 
                } else {
                    box.style.display = "none"; 
                }
            });
        });
    }

    const enquiryForm = document.getElementById("enquiryForm") || document.getElementById("wigDesignForm");
    
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            const requiredFields = enquiryForm.querySelectorAll("[required]");
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    highlightError(field, "This field is required.");
                } else {
                    clearError(field);
                }
            });

            if (isValid) {
                alert("Thank you! Your submission has been received successfully.");
                enquiryForm.reset();
            }
        });
    }

});