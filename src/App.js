import './App.css';
import {IntlProvider} from "react-intl";
import ContentExplorer from "box-ui-elements/es/elements/content-explorer";
import mainLogo from'./box-dev-logo.png';
// optionally you can use Box TS SDK for additional logic
import { BoxClient, BoxDeveloperTokenAuth } from "box-typescript-sdk-gen";

function App() {
  // Get the token from Developer Console (app's configuration tab)
  const token = "<DEVELOPER_TOKEN>";

  // Folder ID with a metadata template applied
  // The metadataQuery will apply to this folder
  const rootFolderID = "<FOLDER_ID>";

  // Get ENTERPRISE_ID from Developer Console (app's general settings)
  const EID = "<ENTERPRISE_ID>"
  
  // Get templatekey from Admin Console (Content -> Metadata -> check url for ID)
  const templateName = "<METADATA_TEMPLATE>" // Case sensitive
  
  // Define metadata source
  // Example: enterprise_123456789.metadatatemplate
  const metadataSource = `enterprise_${EID}.${templateName}`

  const metadataQuery = {
    from: metadataSource,

    // Filter items in the folder by existing metadata key
    query: "key = :arg1",

    // Display items with value
    query_params: { arg1: "value" },

    // Define the ancestor folder ID
    ancestor_folder_id: 0,

    // Define which other metadata fields you'd like to display
    fields:[
      `${metadataSource}.name`,
      `${metadataSource}.last_contacted_at`,
      `${metadataSource}.industry`,
      `${metadataSource}.role`,
    ]
  };


  // The metadata fields/columns to view - must be valid field names from the metadata template
  const fieldsToShow = [
    // Determine if the user can edit the metadata directly from Content Explorer component
    { key: `${metadataSource}.name`, canEdit: false },
    // Determine label alias on metadata column with displayName prop
    { key: `${metadataSource}.industry`, canEdit: false, displayName: "alias" },
    { key: `${metadataSource}.last_contacted_at`, canEdit: true },
    { key: `${metadataSource}.role`, canEdit: true },
  ];

  const defaultView = "metadata"; // Required prop to paint the metadata view. If not provided, you'll get regular folder view.

  // It's possible to get file metadata using eg. Box TS SDK
  // This part is not obligatory for the metadata content explorer view
  const getFileMetadata = async function main(token, fileID) {
    try {
      const client = new BoxClient({
        auth: new BoxDeveloperTokenAuth({ token }),
      });
      const metadata = await client.fileMetadata.getFileMetadataById(
        fileID,
        'enterprise_123456789',
        'metadatatemplate'
      );
      console.log(metadata)
    } catch (e) {
      alert(String(e));
      console.error(e);
    }
  }

  return (
    <IntlProvider locale="en">
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={mainLogo} alt="Box Dev logo"></img>
          <h2 >Metadata View in ContentExplorer</h2>
        </header>
        <section>
          <div className="metadata-based-view">
            <ContentExplorer
              rootFolderId={rootFolderID}
              token={token}
              metadataQuery={metadataQuery}
              fieldsToShow={fieldsToShow}
              defaultView={defaultView}
            />
          </div>
        </section>
      </div>
    </IntlProvider>
  );
}

export default App;
