# **currency_exchanger**
Project Initiated: 2020-11-20<br>
Updated: 2020-11-27
## **Project Description**
This project allows the user to select an input currency with "dollar" amount, and an output currency.  The website will make an API call to https://www.exchangerate-api.com/ to retrieve the most up to date exchange rate information. It will provide the user with the current exchange rate between the selected currencies as a number, as well as calculate the value of the "dollar" amount in the new currency.

To run this website program on a local computer, the user should use their own API key, which can be obtained at https://www.exchangerate-api.com/. Insturctions for how to obtain and 'install' this key are provided in the Installation Instructions below.

Please note that the online version of this project has a limited number or API calls per month.  If this maximum number of API calls is reached, the program will not run as expected.
## **Required for Use**
* A browser that can run HTML5 is required.
* An exchangerate-api.com API key (if you want to run the program on your own computer).
## **Installation Instructions**
API Key:  If you are not using the live webpage version of this project, you will need to obtain a personal API key from https://www.exchangerate-api.com/.  Follow the link, enter your email address, and click the large blue "Get Free Key" button.  You will then be provided your own personal API key for use with this project. Make sure to look for a verification email from exchangerate-api.com. If you do not verify your email address with them, your API key will become invalid after a few hours.

**Option 1** (live webpage)
1) Follow the link below to access the live version of this webpage.

**Option 2**
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. https://github.com/RMGit-it/currency_exchanger

2) Download a .zip copy the repository by clicking on the large green "Code" button near the upper right corner of the screen.
3) Right click the .zip file and extract(unzip) it's contents.
4) Open the unzipped folder/files using Visual Studio, Visual Studio Code, or similar source code editing program.  
5) Create a ".env" file in the root directory of the project.  Open this file and copy the following into it.<br>

    API_KEY = YOUR_KEY_HERE

    Replace YOUR_KEY_HERE with the personal API key that you have retrieved from  exchangerate-api.com.  Save the .env file and close it.

6) Install all required dependencies from the package.JSON folder, and then build the program.  If you are using Node Package Manager, first navigate to the root directory of the project in your console.  You can then type the following commands to install and build the program.

    <code>npm install</code>

    <code>npm run build</code>

    Once the code is built, a "div" directory will be created in the root directory of the project.  Launch the "index.html" file found here and it should open with your default web browser.

**Option 3** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current direcory and hit return/enter

    <code>git clone https://github.com/RMGit-it/currency_exchanger</code><br>

3) Once the project has finished downloading, navigate to the root directory of the project in the terminal/console, and type <code>code .</code> and then hit return/enter.

    The project should automatically launch using your default source code editor.

4) Create a ".env" file in the root directory of the project.  Open this file and copy the following into it.<br>

    API_KEY = YOUR_KEY_HERE

    Replace YOUR_KEY_HERE with the personal API key that you have retrieved from  exchangerate-api.com.  Save the .env file and close it.

5) Install all required dependencies from the package.JSON folder, and then build the program.  If you are using Node Package Manager, first navigate to the root directory of the project in your console.  You can then type the following commands to install and build the program.

    <code>npm install</code>

    <code>npm run build</code>

    Once the code is built, a "div" directory will be created in the root directory of the project.  Launch the "index.html" file found here and it should open with your default web browser.

## **Usage / Examples**
Convert From: USD - United States Dollar - United States<br>
Convert To: JPY - Japanese Yen - Japan
Amount: 150

Output: The exchange rate between USD and JPY is 104.2543.<br>  150 USD = 15638.15 JPY.
## **Planned Features**
No new features are planned at this time.
## **Known Bugs**
There are no known bugs
## **Technology Used**
* HTML
* JavaScript
* Bootstrap
* jQuery
* CSS
## **Authors and Contributors**
Authored by: Randel Moore
## **Contact**
RMGit.it@gmail.com
## **License**

GPLv3

Copyright © 2020 Randel Moore