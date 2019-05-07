# StarBucks Brewery

It is a server configured just to serve the images and names of Starbucks products that are publicly available [here](https://www.starbucks.com/menu/catalog/product?drink=espresso#view_control=product)
The project aims to leverage these downloadable resources provided from the official starbucks website without adding unnecessary traffic to their servers just to keep things simple



# Instructions

## Running Locally
- Install Node.js
- Create an account in Heroku and make sure that Heroku CLI is installed(If you wish to make it available publicly to the world. Else Skip)
- Clone the repository and browse into it using PowerShell(for windows) or Terminal(for Mac or Linux)
- Then,
```
npm install
npm start
```

The App should live on localhost:5000/

## Making it public on the internet using Heroku 

- Make sure you have installed Heroku CLI
- Setup the login credentials to you account using the instructions available [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- If everything went right you might be able to push the changes to your heroku account using,
```
git push heroku
```

or 
- Head over to [Heroku](https://starbucks-coffee-api.herokuapp.com/) where I have deployed this application(It might take upto 15sec to boot the app back if it has not been used for a long time)

## What does it do? 

To consume this API send a <code>GET</code> request to the path /api/search with the query parameters
<br>
<div class="table" align="center">
    <table id="api-table">
        <thead>
            <tr>
                <th>Parameter</th>
                <th>values</th>
                <th></th>
            </tr>
        <tr><td>drink</td><td><strong>(required)</strong> You select the type of drink to return in the results. Some of the available types are:<br><br><code><strong>iced-coffee</strong></code><br><br><code><strong>evolution-fresh</strong></code><br><br><code><strong>refreshers</strong></code><br><br><code><strong>iced-tea</strong></code><br><br><code><strong>bottled-drinks</strong></code><br><br><code><strong>brewed-coffee</strong></code><br><br><code><strong>espresso</strong></code><br><br><code><strong>frappuccino-blended-beverages</strong></code><br><br><code><strong>kids-drinks-and-other</strong></code><br><br><br>You can also chain multiple drink types using &amp; operator</td></tr><tr><td>limit</td><td>a numerical value describing the number of results to be returned. Defaults to 10. If limit = 0, it returns all drinks in that category</td></tr></thead>
        <tbody>
        </tbody>
    </table>
</div>


# License

    Copyright 2018 DIVAKAR RAJESH S

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    All the images and the copyrighted names of the products are digital properties of Starbucks Coffee Company and are subjected to their own terms of use.
