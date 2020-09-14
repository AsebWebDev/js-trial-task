# Romeo Romance
### JavaScript Challenge

**Introduction**

The task for this awesome and fun challenge: create a JavaScript App showing a grid of user profiles with data from two backend endpoints using frameworks and packages of your choice. The app should work on all screen sizes.

**Worflow**

1. Setting up basic folder & files structure

2. Analyzing given data from backend via Postman. Realizing I will have to combine the offered basic userdata with the seperatly offered detailed user data. Therefore I decided to fetch basic userdata first.

3. To fetch the detailed data, I will have to extract all ids from the received basic data. I want to avoid a single GET-Request for each id, so I will combine them. First i need to create a query string for this request.

4. After fetching all detailed data for the corresponding ids, I had to combine these two objects, identified by their common id --> then I have the data I can use in my components.

5. I want to show each profile on a flippable card and will use the package react-card-flip. One of my favorite frameworks is mdbreact (based on bootstrap), so I am using this for styling support.

6. Started with creating the card component, thought about basic structure and what I want to show on front and back; for some data I want to show small badges with icon. I created another component showing a badge in a specific color and with an icon depending on the given data. Moment.js is a great way to format time string  as requested in the task.

7. After this I finished the styling, which took some time and I think it's solid. 

8. Very important: to orchestrate value-added niches and seize dynamic convergence i definetly had to expedite robust deliverables and architect dot-com hashtags ;) 

9. For implementing a switch to toggle between sorting by distance and activity I had to trigger a refetch of the extended data with new sorting.

10. Finally I wanted to autoload new profiles, when scrolled to the bottom of the page. I am using the package react-infinite-scroll-component, which is a great support for this task.

**Future Implementations**

- use lazy loading for app performance improvement when loading external pictures
- style detailed data on the back of the profile card; parse raw json data to something readable or show small icons (f.e. smoker YES = green check, NO = stop sign), align detailed data to end of card
- handle data, that is too long... f.e. a comment, that has more than 4 lines
- show more location data, when hovering over distance
- filter "only show online profiles"
- stay updated for console error on react-infinite-scroll-component https://github.com/ankeetmaini/react-infinite-scroll-component/issues/203
- stay updated for console error on mdbreact https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design/issues/122

**Setup**

You can clone the project like this in your terminal:

```
git clone git@github.com:AsebWebDev/js-trial-task.git
npm start in folder js-trial-task/server/ for production
npm run dev in folder js-trial-task/server/ for development
npm start in folder js-trial-task/client/ 
```

---
