export function getFileExt(extension) {
  const mimeTypes = {
    // Text
    "html": "text/html",
    "css": "text/css",
    "js": "application/javascript",
    "json": "application/json",
    "txt": "text/plain",
    
    // Images
    "png": "image/png",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "gif": "image/gif",
    "svg": "image/svg+xml",
    "ico": "image/x-icon",
    
    // Audio/Video
    "mp3": "audio/mpeg",
    "wav": "audio/wav",
    "mp4": "video/mp4",
    "webm": "video/webm",
    
    // Archives/Binary
    "pdf": "application/pdf",
    "zip": "application/zip",
    
    // Fonts
    "woff": "font/woff",
    "woff2": "font/woff2",
    "ttf": "font/ttf",
    "otf": "font/otf"
  };

  // remove leading dot if present
  const ext = extension.startsWith(".") ? extension.slice(1) : extension;

  return mimeTypes[ext.toLowerCase()] || "application/octet-stream"; // default binary
}
