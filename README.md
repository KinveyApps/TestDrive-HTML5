# TestDrive-HTML5
The TestDrive sample application provides you with a near blank template to get started with. It is great for learning and trying Kinvey, or to build your first application upon.

## Run It
After downloading or cloning the repository:

* Replace `App Key` and `App Secret` (`index.html`) with your applications credentials.
* Start a web server:
```bash
python -m SimpleHTTPServer 8000
```
* Point your browser to `http://localhost:8000/index.html`. Adjust the hostname and port number if necessary.

## Functionality
This application demonstrates:

* Basic set-up for HTML5 web apps using Kinvey
* Pinging the service

## Architecture
The starting point of this application is `index.html`. Here, you will find placeholders and hints on where to put your application content, styles, and scripts. Code to connect your app with Kinvey is already inserted.

By default, the sample app includes a button to ping the Kinvey service. If you want to get rid of this functionality, simply remove `scripts/ping.js`, and delete the button HTML tag from `index.html`. 

Depending on whether you are building for desktop or mobile (or both), the following two repositories might be of help:

* [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate)
* [Mobile boilerplate](https://github.com/h5bp/mobile-boilerplate)

## License

    Copyright 2013 Kinvey, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.