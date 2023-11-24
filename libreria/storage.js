const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+".png")
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;