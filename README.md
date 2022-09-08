# CS279r-Tier1-Programming-HW1-Olayeni-Oladipo-

[Tier 1] Programming HW1: Make a To-Do App with Node.js and MongoDB <br />
Olayeni Oladipo <br />
September 2, 2022 <br />

**Reflection:** What are the significant software concepts that this combination of technologies has that plain HTML, CSS, and JS does not? Or that they handle significantly differently?

1) I first noticed the difference in data storage. MongoDB is a distinct data storage program that allows for safer connection with a whitelist of allowed users and a few more added lines of code to connect to the database. For HTML/CSS/JS, I had a the web storage API, Storage. I believe WebStorage is better for smaller amounts of data while MongoDB seems more scalable.
2) .EJS file usage with MongoDB and Node.js instead of HTML files that HTML/CSS/JS uses. EJS (Embedded JavaScript) allows better for the dynamic rendering of web pages given that you can use JavaScript within the HTML to bind dynamic data to the webpage. This is comparison to having to code into your JS file, new invocations of HTML sections when adding dynamic data (as I did with new todo list items in HW0).
3) Again, with Node.JS vs JavaScript, Node.JS allows for execution outside of the browser, but in HTML/CSS/JS, the web browser executes the javascript.

**Instructions** to launch prototype:

1) Clone or download this repo, saving the files to a directory
2) Open terminal and CD into the directory of the downloaded files.
3) Open up terminal and enter:
> npm init
4) Skip if you already have the below installed. Otherwise, make sure you have necessary packages installed. Enter the following into your terminal.
> npm install --save express mongoose ejs dotenv
> npm install --save-dev nodemon
5) Enter the following in your terminal.
> npm start

Open the link http://localhost:3000/ and play around with the following tools:
    1) Add a to-do list item by typing in the content and pressing the + sign
    2) Edit a to-do list item (press the edit icon per item and edit text)
    4) Delete a to-do list item (press the red X per item)
    5) Refresh (or exit then reopen) the web address and note how your items remain

Worked off the code from the following sources:
- https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-1-c645c7a27583 <br />
- https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039 <br />

Used the following to additionally inform my comments:
- https://expressjs.com/en/api.html <br />
- https://nodejs.org/en/knowledge/getting-started/what-is-require/ <br />
- https://mongoosejs.com/docs/guide.html <br />
- https://nodejs.org/api/modules.html#the-module-object <br />
- https://www.geeksforgeeks.org/express-js-app-use-function/ <br />
- https://www.geeksforgeeks.org/express-js-express-urlencoded-function/  <br />
- https://thecodebarbarian.com/how-find-works-in-mongoose.html  <br />
- https://mongoosejs.com/docs/api.html#model_Model-find  <br />
- https://www.w3schools.com/tags/att_form_method.asp

Sources used to inform my reflection above:
- https://www.geeksforgeeks.org/difference-between-index-ejs-and-index-html/ <br />