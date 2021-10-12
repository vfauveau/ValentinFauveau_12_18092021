# **SportSee application**

### Prerequisites

1. node.js
2. yarn (v1.22.11 or more)

### Installation

I used Visual Studio Code to create this project, but it should work with other text editors aswell.
The application needs a few librairies & packages to work.
You will need to install Recharts (render Charts), React Router(to ensure the routing system in the application), Proptypes is utilised to check the type of props.

API reference
Some informations on the API we utilise can be found on this repository : [API](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
Once you cloned the project to your computer, open it in your editor.

### API set-up

1. Open a terminal, and type the command _"cd P9-front-end-dashboard-master"_.
2. install yarn in the folder with the command _"yarn install"_.
3. Launch the API, with _"yarn run start"_.

Note : The API **must** run at localhost:3000 / run the API first, then run the React-App.

You should see this : 
![API Launch Result](react-app/public/doc1.png)

### React-App Folder set-up

1. Open a new terminal, and type the command _"cd react-app"_.
2. Install yarn in the folder with the command _"yarn install"_.
3. Install Recharts with _"yarn install recharts"_.
4. Install proptypes with _"yarn add proptypes"_.
5. Install react-router with _"yarn add react-router"_.
6. You can now launch the react application with _"yarn run start"_. You will need to run the application on a different localhost than the api.
