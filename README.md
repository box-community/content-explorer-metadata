<p align="center">
  <img src="src/box-dev-logo.png" alt= “box-dev-logo” width="30%" height="50%">
</p>

### Metadata view in Content Explorer

Prerequisites for this demo:
Node version: ^18.18.2
React version: ^17.0.2
Latest released box-ui-elements package: [^19.0.0](https://developer.box.com/changelog/#2024-01-25-box-ui-elements-v1900-released)

Detailed instructions for setting this project are avaliable in this [blog post](/).

Quick summary of steps you need to perform for this project:
1. Set up Box a account.
2. Create a Box [custom app](https://developer.box.com/guides/applications/app-types/custom-apps/).
3. Configure Box app: add local development address to CORS section in the [Developer Console](https://app.box.com/developers/console) Configuration tab
4. Create a metadata template and apply it to a folder. Read this [blog post](https://medium.com/box-developer-blog/getting-started-with-box-metadata-administration-9862cb12dd5e) for detail introduction to Box metadata.
5. Update App.js file:
    * DEVELOPER_TOKEN: Generate developer token in the the Developer Consone Configuration tab.
    * ENTERPRISE_ID: Copy Enterprise ID from the General Settings tab.
    * METADATA_TEMPLATE: [see instructions](https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates).
    * FOLDER_ID: make sure the folder has [enable Cascade Policy](https://support.box.com/hc/en-us/articles/360044195873-Cascading-metadata-in-folders).
    * Add metadata query to Content Explorer component, for introdution to this topic read this [blog post](https://medium.com/box-developer-blog/working-with-box-metadata-queries-109b875a7301).
6. Run project using: `npm install`, `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
