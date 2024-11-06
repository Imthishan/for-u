function submitPreferences() {
    const comfortZones = document.getElementById("comfortZones").value;
    const foodAllergies = document.getElementById("foodAllergies").value;
    const companion = document.getElementById("companion").value;
    const destinations = Array.from(document.getElementById("destination").selectedOptions).map(option => option.text);
    const dressColor = document.getElementById("dressColor").value;
    const dessert = document.getElementById("dessert").value;

    alert(`Thank you, my love! 💖 Here’s what you shared:
- Comfort Zones: ${comfortZones}
- Food Allergies: ${foodAllergies}
- Companion Preference: ${companion === 'justUs' ? "Just us ❤️" : "With a friend"}
- Dream Destinations: ${destinations.join(", ")}
- Dress Color: ${dressColor}
- Favorite Dessert: ${dessert}`);
}
