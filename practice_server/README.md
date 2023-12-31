# Node.js
- Node is a open source, server-side javascript run time environment, that allows a developer to run javascript code on the server. Node.js is built on chrome v8 javascript engine and uses an event driven, non-blocking I/O, which makes it well - suited  for building scalalble and high -performance network applications. 
# v8 Engine 
- the v8 engine is an open-source javascript engine which is developed by chrome for their web browser. It is written in c++ language which is responsible for interpreting and executing javascript code in the browser.
- key features of v8 engine => JIT compilation, optimizations, Garbage collections, Multi-threaded execution, isolation.
- Node uses-> highly efficient and scalable web applications that can handle a large number of concurrent connections and I/O operations.


Node.js is a JavaScript runtime environment that executes JavaScript code outside of a browser. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js is often used to develop web servers and networking applications, but it can also be used for a wide variety of other tasks, such as data processing, machine learning, and graphical user interfaces.

Here are some of the key features of Node.js:

Cross-platform: Node.js runs on Windows, Linux, macOS, and other platforms.
Event-driven: Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Asynchronous: Node.js can handle multiple requests concurrently without blocking.
Scalable: Node.js applications can be easily scaled up or down to handle increased or decreased traffic.
Easy to learn: Node.js is based on JavaScript, which is one of the most popular programming languages in the world.
Node.js is used by a wide variety of companies and organizations, including Netflix, PayPal, Uber, and NASA. It is also used to develop popular open source projects, such as Express.js, Koa.js, and Socket.IO.

Here are some examples of what Node.js can be used for:

Web servers
Networking applications
Data processing
Machine learning
Graphical user interfaces
Real-time applications
Chat applications
File servers
APIs
Microservices
Node.js is a powerful and versatile platform that can be used to develop a wide variety of applications. It is a popular choice for developers who are looking for a lightweight, efficient, and scalable runtime environment.

If you are interested in learning more about Node.js, there are many resources available online. There are also many tutorials and courses that can teach you how to develop Node.js applications.
In Node.js, a module is a self-contained JavaScript file that encapsulates a specific set of functionality. Modules in Node.js serve as building blocks for organizing and structuring code in your applications. They enable code reuse, maintainability, and separation of concerns by allowing you to break your application into smaller, manageable pieces.

# route.use
- it's router which provide a url where your existing code available.
- route.use('/', userroute)=> here userroute is a code which is available on '/';
- 
 # Body-parser
 - 
Body-parser is a Node.js middleware that parses the incoming request bodies in a middleware before you handle it. It is useful for parsing JSON, buffer, string and URL encoded data submitted using HTTP POST request.

Without body-parser, you would have to manually parse the request body in your code. This can be time-consuming and error-prone, especially if the request body is complex.

Body-parser makes it easy to parse the request body by providing a number of middleware functions that can be used to parse different types of data. For example, the following middleware function parses JSON request bodies:

JavaScript
const bodyParser = require('body-parser');

app.use(bodyParser.json());
Use code with caution. Learn more
Once this middleware function is registered, you can access the parsed JSON data in your code using the req.body object. For example, the following code prints the name property of the parsed JSON object to the console:

JavaScript
app.post('/users', (req, res) => {
  const name = req.body.name;

  console.log('User created:', name);

  res.send('User created successfully');
});
Use code with caution. Learn more
Body-parser is a popular Node.js middleware that is used by many developers to parse request bodies. It is easy to use and can save you a lot of time and effort.

Here are some of the benefits of using body-parser in Node.js applications:

It makes it easy to parse request bodies, even if they are complex.
It supports a variety of data formats, including JSON, buffer, string, and URL encoded data.
It is easy to use and can be configured to meet your specific needs.
It is well-tested and reliable.
If you are developing Node.js applications that need to parse request bodies, I recommend using body-parser. It is a powerful and easy-to-use middleware that can save you a lot of time and effort.
41

- You can also use the fetch feature to apply any of Cloudinary's image and video transformations to the delivered asset. Simply add the transformation parameters to the URL directly after the fetch prefix and before the URL of the asset.

- Middleware in Node.js is a function that has access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

- What is a container?
A container is a sandboxed process running on a host machine that is isolated from all other processes running on that host machine. That isolation leverages kernel namespaces and cgroups, features that have been in Linux for a long time. Docker makes these capabilities approachable and easy to use. To summarize, a container:

Is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.
Can be run on local machines, virtual machines, or deployed to the cloud.
Is portable (and can be run on any OS).
Is isolated from other containers and runs its own software, binaries, configurations, etc.
If you're familiar with chroot, then think of a container as an extended version of chroot. The filesystem comes from the image. However, a container adds additional isolation not available when using chroot.

What is an image?
A running container uses an isolated filesystem. This isolated filesystem is provided by an image, and the image must contain everything needed to run an application - all dependencies, configurations, scripts, binaries, etc. The image also contains other configurations for the container, such as environment variables, a default command to run, and other metadata.

- Containerize an application
For the rest of this guide, you'll be working with a simple todo list manager that runs on Node.js. If you're not familiar with Node.js, don't worry. This guide doesn't require any prior experience with JavaScript.


- asynchronous function
=> 
The word "asynchronous" is derived from the Greek words "a-" (meaning "not") and "synchronos" (meaning "at the same time"). Therefore, "asynchronous" means "not at the same time" or "not coordinated in time."

In general, asynchronous is used to describe events or processes that occur at different times or at different speeds. For example, two cars traveling at different speeds are asynchronous, as is a person walking and a person running. In the context of communication, asynchronous means that the sender and receiver are not communicating in real time. For example, email is an asynchronous form of communication, while a phone call is a synchronous form of communication.

Here are some examples of how the word "asynchronous" is used in a sentence:

"The two databases are asynchronous, which means that they do not update each other in real time."
"The students in the online class completed the assignments asynchronously, which means that they could work on them at their own pace."
"The doctor and patient communicated asynchronously via email, which allowed the patient to ask questions at their own convenience."

- Adding  interactivity 
- Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter, you’ll learn how to write components that handle interactions, update their state, and display different output over time.

- State as a snapshot
export default function App(){
  const [to, setto]= useState('Alice');
  const [message, setmessage]= useState('hello hi');

  function handleSubmit(e){
    e.preventDefault();
    setTimeout(()=>{
    alert(`you said ${message} to ${to}`); 
    }, 1000)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        To: {' '}
        <select
          value={to}
          onChange={e=>setto(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
    <textarea 
      placeholder="message"
      value={message}
      onChange={e=>setmessage(e.target.value)}/>
      <button type="submit">send</button>
    </form>
  )
};

