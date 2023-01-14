# 🏷️ Lanyard Card Example


This website is an example of a profile card using the [**lanyard api**](https://github.com/Phineas/lanyard) to get your Discord presence in real time!

# Freezy's - LinkTree

![alt text](/banner.gif)

## Setup
Replace the field `YOUR_ID` with your Discord ID on [App.tsx]

## Description
The Home page is the main component of the application. It is responsible for displaying the user's presence information from the Discord API, as well as providing a toggle for switching between different background colors.

The component starts by importing the necessary React hooks and icons from the 'react' and 'react-icons' packages. It also imports a custom hook 'useLanyardWS' which allows for easy access to the Discord API, and the 'Link' component from the 'react-router-dom' package.

Once all the necessary imports have been made, the component sets up two state variables, 'bgColor' and 'modalIsOpen', using the 'useState' hook. The 'bgColor' state variable will be used to change the background color of the page, while the 'modalIsOpen' state variable will be used to toggle a modal that displays additional information.

The component then uses the 'useLanyardWS' hook to retrieve the user's presence data from the Discord API, specifically the '972820329686790184' user. This data is then destructured to extract the 'user' and 'status' variables, which will be used to display the user's avatar and status on the page.

The component also uses the 'useMemo' hook to extract the 'activity' variable from the presence data, which is used to display the user's current activity. The 'getAssetUrl' function is used to generate the URL for the activity's image, which is then passed to an 'img' element to be displayed on the page.

The component also includes a 'handleClick' function which is used to toggle the background color of the page. When the 'handleClick' function is called, the component's 'bgColor' state variable is updated, and the background color of the page is changed accordingly.

Finally, the component returns a JSX element that displays the user's presence information, as well as the background color toggle button. The 'img' element, which displays the user's avatar, is wrapped in a 'div' element with the class 'relative rounded-lg p-4 w-full max-w-xl border-4 border-inherit' which is used for styling.

Overall, the Home page component is responsible for displaying the user's presence information, as well as providing a toggle for switching between different background colors. It makes use of various React hooks and the Discord API to retrieve and display the necessary data.

### Used in this project
- [React](https://reactjs.org)
- [Vite](vitejs.dev)
- [Tailwind CSS](tailwindcss.com)
- [Lanyard API](https://github.com/Phineas/lanyard)
- [use-lanyard](https://github.com/alii/use-lanyard)