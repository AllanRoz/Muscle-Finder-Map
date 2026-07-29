# Muscle Map

Build a responsive, modern web application called "MuscleFinder" — an educational discovery tool to help users learn which exercises target specific muscles. The app must have a sleek, dark-mode gym aesthetic using React, Tailwind CSS, and Lucide Icons. ### 1. Key Application Layout Create a clean, dual-panel dashboard interface focused on interaction: - Left/Center Panel (60%): The Interactive 2D Muscle Model (Front & Back views). - Right Panel (40%): The "Workout Discovery Panel" showing dynamic content. ### 2. Core Feature Specifications #### A. Interactive 2D Muscle Human Body Graphic - Render clean, vector SVG representations of the human body (Anterior/Front and Posterior/Back views shown simultaneously side-by-side). - **CRITICAL INTERACTION:** Every major muscle group on the SVG must be clickable. - Clickable groups: Chest, Front Delts, Side Delts, Rear Delts, Biceps, Triceps, Abs, Obliques, Lats, Upper Back, Lower Back, Quads, Hamstrings, Glutes, and Calves. - **Visual Feedback:** When a user clicks a muscle group, it must highlight with a glowing neon accent (e.g., emerald-500) and remain highlighted to show it is the "Primary Target." The title of the Discovery Panel must update to "Exercises for: [Muscle Name]". #### B. Workout Discovery Panel (Dynamic Content) - This panel must react instantly when a muscle is clicked on the body graphic. - When a muscle is active, it populates a clean, vertical list of exercises associated with that muscle (see data structure below). - **Initial State:** If no muscle is clicked, display instructions: "Click a muscle group on the body to see exercises." #### C. Exercise Details, Videos, and "Secondary Highlighting" - Each exercise listed in the Discovery Panel must be clickable. - When an exercise card is clicked: - **Video Popup:** Open a modal within the app showing a high-quality embedded video demonstration link (e.g., YouTube embed). - **Anatomical Context on Body:** While the video modal is open, the SVG body graphic must dynamically highlight *other* muscle groups that the exercise "hits" as secondary stabilizers or movers, using a different color (e.g., yellow-400). - Example: If a user clicks "Bench Press," the Primary muscle (Chest) remains glowing emerald, but the Triceps and Front Delts now glow yellow on the body map. #### D. Predictive "Suggest Next Target" Logic - At the bottom of the Workout Discovery Panel, include a card titled: "Suggested Complementary Target." - Implement simple predictive logic to suggest an opposing or complementary muscle group that hasn't been engaged by the currently viewed active muscle group. - Logic Example: If active muscle is "Chest" (Push muscle), suggest "Lats" (Pull muscle). If active is "Quads," suggest "Hamstrings." #### E. Local Data Structure (Pre-populate with this example data) *Lovable needs this data structure to understand the relationships between muscles and exercises:* 1. **Barbell Bench Press:** Primary: `Chest`; Secondary: `Triceps`, `Front Delts`; Video: `[https://www.youtube.com/watch?v=rT7DgCr-3pg](https://www.youtube.com/watch?v=rT7DgCr-3pg)` 2. **Lat Pulldown:** Primary: `Lats`; Secondary: `Biceps`, `Upper Back`; Video: `[https://www.youtube.com/watch?v=CAwf7n6Luuc](https://www.youtube.com/watch?v=CAwf7n6Luuc)` 3. **Barbell Squat:** Primary: `Quads`, `Glutes`; Secondary: `Lower Back`, `Hamstrings`; Video: `[https://www.youtube.com/watch?v=ultWZbUMPL8](https://www.youtube.com/watch?v=ultWZbUMPL8)` 4. **Romanian Deadlift:** Primary: `Hamstrings`, `Glutes`; Secondary: `Lower Back`; Video: `[https://www.youtube.com/watch?v=2SHsk9AzdjA](https://www.youtube.com/watch?v=2SHsk9AzdjA)` 5. **Dumbbell Bicep Curl:** Primary: `Biceps`; Secondary: `Forearms`; Video: `[https://www.youtube.com/watch?v=ykJmrZ5v0VN](https://www.youtube.com/watch?v=ykJmrZ5v0VN)` 6. **Rope Tricep Pushdown:** Primary: `Triceps`; Secondary: `none`; Video: `[https://www.youtube.com/watch?v=vB5OHsJ3EME](https://www.youtube.com/watch?v=vB5OHsJ3EME)`

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ee3f05ff-4360-45c4-9248-e5f793e493de).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
