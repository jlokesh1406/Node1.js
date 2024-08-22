
//1.globals
// __dirname  --> path to current directory
// __filename --> file name
//   require  --> function to use modules 
//   module   --> info about current module encapsulated code
//   process  --> info about  envoriment
/*      

        console.log(__dirname);  //D:\web u\program file\7.Node.js\Main_2\fcc\main1
        console.log(__filename); //D:\web u\program file\7.Node.js\Main_2\fcc\main1\app.js

        // setInterval (()=>
        // {
        //     console.log("TED");
        // },20);

        const say=(data)=>
        {
            console.log(`hii: ${data}`);
        }
        let temp1="LOKESH";

        say("lokesh"); //hii: lokesh
        say(temp1);    //hii: LOKESH

        const names1 = require('./module');
        console.log(typeof(names1));     //object
        console.log(names1);            //{name1: 'LOKESH',name2: 'lokesh',items: [ 'one', 'two', 'three' ],   obj: { name: 'obj' } }
        console.log(names1.name1);      //LOKESH
        console.log(names1.name2);      //lokesh

        const names2 = require('./module');
        console.log(names2.items[0]); //one
        console.log(names2.items[1]); //two
 
        console.log(names2.obj);       //{ name: 'obj' }
        console.log(names2.obj.name); //obj

        const sumModule = require('./module');
        console.log(sumModule.sum1());
        console.log(sumModule.sum2(1, 2));



//2.built-in-modules
    //1.os
    const os = require('os');

    const userInfo = os.userInfo();
    console.log(os.userInfo()); 
    // {
    //     uid: -1,
    //     gid: -1,
    //     username: 'jloke',
    //     homedir: 'C:\\Users\\jloke',
    //     shell: null
    //   }
    const username = userInfo.username;
    const userdir  = userInfo.homedir;
    console.log(username); //jloke
    console.log(userdir);  //C:\Users\jloke
    const obj1 = 
    {
        username : userInfo.username,    
        userdir  : userInfo.homedir
    }
    console.log(obj1);   //{ username: 'jloke', userdir: 'C:\\Users\\jloke' }

    //2.path
    const path = require('path');
    console.log(path);

    const file_name = path.join("/ted","talks","CEO","LD.txt");
    console.log(file_name); //\ted\talks\CEO\LD.txt

    const file_base_name = path.basename(file_name);
    console.log(file_base_name);  //LD.txt

    const absolute = path.resolve(__dirname,'content','js1','node1.js');
    console.log(absolute); //D:\web u\program file\7.Node.js\Main_2\fcc\main1\content\js1\node1.js

    //3.fs
    // const fs = require('fs');
    // fs.writeFileSync('js1_file_create_and_write.txt','Hello from js1_file_create_and_write');
    
    // fs.readFileSync(path[, options]): Reads the contents of a file synchronously. The code execution is paused until the file is fully read. Use this for blocking operations where you need the file's content before continuing.
    // fs.readFile(path[, options], callback): Reads the contents of a file asynchronously. The code continues running while the file is being read in the background. Once the read operation is complete, the provided callback function is called with the file's content.
    // fs.writeFileSync(path, data[, options]): Writes data to a file synchronously. The code execution is paused until the file is fully written. Use this for blocking operations where you need the file to be saved before continuing.
    // fs.writeFile(path, data[, options], callback): Writes data to a file asynchronously. The code continues running while the file is being written in the background. The provided callback function is called once the write operation is complete.


    //---file synchronously (blocking code)---
    //write with over write usinf flag:'a'
    const {readFileSync,writeFileSync}=require('fs');
    writeFileSync("fstxt1.txt","--Hello from FS--\n",{flag:'a'});

    const content1 = readFileSync("fstxt1.txt");  // hexdecimal format <Buffer 2d 2d 48 65 6c 6c 6f 20 66 72 6f 6d 20 46 53 2d 2d>  
    console.log(content1);

    const content2 = readFileSync("fstxt1.txt","utf-8");  // --Hello from FS--
    console.log(content2);

    //---file asynchronously (blocking code)---
    const {readFile,writeFile}=require('fs');
    writeFile('fstxt2.txt', 'Hello, World!', 'utf8', (err,data) => 
    {
        if (err) throw err;
        console.log(`File saved! ${data}`);
    });
    readFile('fstxt2.txt', 'utf8', (err, data) => 
    {
        if (err) throw err;
        console.log(data);
    });
    readFile('fstxt2.txt', 'utf8', (err, data) => 
    {
        if (err) throw err;
        console.log(data);
        readFile('fstxt1.txt', 'utf8', (err, data) => 
        {
            if (err) throw err;
            console.log(data);
        });
    });

    //4.http hyper text transfer protocol
    const http = require('http');
    const SERVER = http.createServer((request, response) => {
        if (request.url === '/') {
            response.write
            (`
                <h1>HOME</h1>
                <a href="/">BACK TO HOME</a>
                </br>
                </br>
                <a href="/about">BACK TO ABOUT</a>
                </br>
                </br>
                <a href="/profile">BACK TO PROFILE</a>
            `);
            response.end();
            return;
        }
    
        if (request.url === '/about') {
            response.write
            (`
                <h1>ABOUT</h1>
                <a href="/">BACK TO HOME</a>
                </br>
                </br>
                <a href="/about">BACK TO ABOUT</a>
                </br>
                </br>
                <a href="/profile">BACK TO PROFILE</a>
                </br>
                </br>
            `);
            response.end();
            return;
        }

        if (request.url === '/profile') {
            response.write
            (`
                <h1>PROFILE</h1>
                <a href="/">BACK TO HOME</a>
                </br>
                </br>
                <a href="/about">BACK TO ABOUT</a>
                </br>
                </br>
                <a href="/profile">BACK TO PROFILE</a>
                </br>
                </br>
            `);
            response.end();
            return;
        }
    
        // Default response for unmatched routes
        //In Node.js, `response.end()` ends the HTTP response, sending the final data (if any) to the client and closing the connection.
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end
        (`
                <h1>404 - Not Found</h1>
                <a href="/">BACK TO HOME</a>
                </br>
                </br>
                <a href="/about">BACK TO ABOUT</a>
                </br>
                </br>
                <a href="/profile">BACK TO PROFILE</a>
                </br>
                </br>
        `);
    });
    
    SERVER.listen(5000, () => {
        console.log('Server is listening on port 5000...');
    });
*/
//3.npm
    //local dependecy it's use only in this particular project
    //    npm install <packageName>  or npm i <packageName>
    //global dependecy it's use any project
    //    npm install -global <packageName> or  npm install -g <packageName>
    //package.json it's mainfest file stores important info about project
    //    1.manual approach (create package.json)
    //    2.npm init
    //    3.npm init -y
    

//Lodash is a popular JavaScript utility library that provides a wide range of functions to simplify working with arrays, objects, strings, and other data types. It helps in writing cleaner and more efficient code by offering utilities for tasks like cloning objects, deep merging, manipulating arrays, and more.
    //lodash packagename:npm install lodash

        //1.flattenDeep()
        const _ = require('lodash');
        const items = _.flattenDeep([1, [2, [3]]]);
        console.log(items);  // Output: [1, 2, 3]

        //2.cloneDeep()
        const original = { a: 1, b: { c: 2 } };
        const copy = _.cloneDeep(original);
        copy.b.c = 3;
        console.log(original.b.c); // Output: 2 
        console.log(copy.b.c);     // Output: 3

        //3.chunk()
        const array = [1, 2, 3, 4, 5, 6, 7];
        const chunks = _.chunk(array, 2);
        console.log(chunks);       //Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

        //4.merge()
        const object1 = { a: 1, b: { c: 2 } };
        const object2 = { b: { d: 3 }, e: 4 };
        const mergedObject = _.merge(object1, object2);
        console.log(mergedObject); // Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }

        //5.filter()
        const users = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Jim', age: 27 },
        ];
        const adults = _.filter(users, (user) => user.age > 26);
        console.log(adults); // Output: [{ name: 'Jane', age: 30 }, { name: 'Jim', age: 27 }]
        console.log(adults[0].name); //Jane

        //6.uniq()
        const numbers = [1, 2, 2, 3, 4, 4, 5];
        const uniqueNumbers = _.uniq(numbers);
        console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

        //7.sortBy()
        const sortedUsers = _.sortBy(users, 'age');
        console.log(sortedUsers); 
        // Output: [{ name: 'John', age: 25 }, { name: 'Jim', age: 27 }, { name: 'Jane', age: 30 }]


        const users1 = 
        [
            { name: 'John', age: 25 },
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Jim', age: 27 },
        ];
        const groupBy = _.groupBy(users1, 'age');
        console.log(groupBy); 
        // Output: 
                // {
                // '25': [ { name: 'John', age: 25 }, { name: 'John', age: 25 } ],
                // '27': [ { name: 'Jim', age: 27 } ],
                // '30': [ { name: 'Jane', age: 30 } ]
                // }
        console.log("==11:51===");

        //
        
