# Music-app
Music App like spotify in react native expo.

### General Installation Guide:

This repository contains the code that is based on the React Native + Expo.

https://github.com/shivagyawali/music-app.git

### Setup Application in Local Environment

## Setup development environment in local machine

1. Node JS : Install NodeJS from https://nodejs.org/
2. Expo CLI : ```npm install -g expo-cli``` Install Expo cli tool
3. Git : ```git clone https://github.com/AdamOnLinux/pet_id_app.git``` Strongly suggested to clone into `C:\` or similar so you end up with `C:\pet_id_app` or a similar very SHORT path (long paths will often cause ```npm install``` to fail on windows since some dependencies will end up in subfolders that are longer than 256 characters)
4. Check out latest project from Git repository
5. VS Code : Install VSCode From https://code.visualstudio.com/
6. Create an Expo account  and login that in default browser: https://expo.io/
7. Device / Simulator we need to install the Expo client. Real device we need to install “Expo” manually from App Store. Simulator we need to install manually, please refer this section “Setup Expo client in iOS simulator”

After check please open that project in VS Code, drag bade project folder into VS Code. Open open terminal from VS Code or from system base terminal.
For open the VS code terminal from tool bar Terminal => New Terminal.

### Please confirm we are in base folder, run ```npm install```. It may take some time to complete the dependency library downloading.

```npm install``` or ```yarn install```(in the project directory)

Once download completed we can run our project, below command for running the project.

## To start the project in Expo client

```Expo Run  / Expo r```

## To start project with clear cache

```Expo r -c```

Will start a Metro Builder server  and open that in default browser.

### Publish application to Expo Client

Please signup and login in Expo browser.
https://expo.io

We need to login in Expo with same user in CLI.

login ```expo login```

logout ```expo logout```

Reference Links: https://docs.expo.io/versions/v35.0.0/workflow/expo-cli/


Please navigate to project base folder

run ```sudo expo publish```

This may take some time to build the application and deploy in the expo client.

Process behind the expo client deploy
 
```log
sudo expo publish
Password: *

┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                                                                          │
│   There is a new version of expo-cli available (3.3.0).                                                                                  │
│   You are currently using expo-cli 3.1.2                                                                                                 │
│   Install expo-cli globally using the package manager of your choice; for example: `npm install -g expo-cli` to get the latest version   │
│                                                                                                                                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

Unable to find an existing Expo CLI instance for this directory, starting a new one...
Starting Metro Bundler on port 19001.
Tunnel ready.
Publishing to channel 'default'...
Building iOS bundle
Finished building JavaScript bundle in 57145ms.
Building Android bundle
Finished building JavaScript bundle in 75543ms.
Analyzing assets
Finished building JavaScript bundle in 3397ms.
Finished building JavaScript bundle in 2761ms.
Uploading assets
No assets changed, skipped.
Uploading JavaScript bundles
Published
Your URL is

### https://exp.host/@bugsniper/musicApp

› Closing Expo server
› Stopping Metro bundler
```

### Please select the URl and navigate  https://exp.host/@bugsniper/musicApp

When we open that url in browser, will display our application name with ```QR Code ```. Please scan the QR code in real device we are able to run in Expo Client.


