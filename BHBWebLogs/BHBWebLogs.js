var filesystem
window.onload = init;

function init()
{
	window.webkitRequestFileSystem(window.PERSISTENT, 10*1024*1024, onInitFs,errorHandler);
	alert(filesystem.root);
}

function onInitFs(fs) {
  console.log('Opened file system: ' + fs.name);
  alert('Sucessful !!! Opened file system: ' + fs.name);
  filesystem = fs;
}

function logerr(e) { console.log(e); }

function readTextFile(name) {
    // Get a File from a FileEntry from the root DirectoryEntry
    var file = filesystem.root.getFile(name).file();
    // Use the synchronous FileReader API to read it 
    return new FileReaderSync().readAsText(file);
}

function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
  alert('Error: ' + msg);
}