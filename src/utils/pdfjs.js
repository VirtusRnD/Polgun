const PDFJS_CDN_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js'
const PDFJS_WORKER_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js'

let pdfjsPromise = null

export function loadPdfjs() {
  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib)
  }
  if (pdfjsPromise) {
    return pdfjsPromise
  }

  pdfjsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = PDFJS_CDN_SRC
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC
      resolve(window.pdfjsLib)
    }
    script.onerror = (err) => {
      pdfjsPromise = null
      reject(err)
    }
    document.head.appendChild(script)
  })

  return pdfjsPromise
}
