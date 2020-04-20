const contentful = require('contentful')
const client = contentful.createClient({ … })

//Getting asset information

// Contentful collection responses have a default limit 
// of 100 -> increase it to 1000 to avoid the need for
// pagination at this stage
const {items} = await client.getAssets({limit: 1000})
let images = items
  // only treat image files
  // there can also be pdfs and so one
  .filter(
    ({fields}) => fields.file && ['image/png', 'image/jpeg'].indexOf(fields.file.contentType) !== -1
  )
  // strip out useless information
  // and flatten data structure with needed information
  .map(({sys, fields}) => ({
    id: sys.id,
    revision: sys.revision,
    url: fields.file.url,
    filename: `${sys.id}-${sys.revision}.${fields.file.contentType.split('/')[1]}`
  }))