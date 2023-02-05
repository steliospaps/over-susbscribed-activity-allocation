import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";


//https://javascript.plainenglish.io/how-to-create-download-and-upload-files-in-react-apps-80893da4247a


export default (props) => {

  const [fileDownloadUrl, setFiledownloadUrl] = useState("")
  const [hiddenButtonRef, setHiddenButtonRef] = useState({})

  /**
  * Function returns the content as a CSV string
  * See https://stackoverflow.com/a/20623188/64904
  * Parameter content:
  *   [
  *.     [header1, header2],
  *.     [data1, data2]
  *.     ...
  *.  ]
  * NB Does not support Date items
  */
  const makeCSV = (content) => {
    let csv = '';
    content.forEach(value => {
      value.forEach((item, i) => {
        let innerValue = item === null ? '' : item.toString();
        let result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0) {
          result = '"' + result + '"'
        }
        if (i > 0) { csv += ',' }
        csv += result;
      })
      csv += '\n';
    })
    return csv
  }

  useEffect(() => {
    if (fileDownloadUrl !== "") {
      hiddenButtonRef.click()
      URL.revokeObjectURL(fileDownloadUrl)
      setFiledownloadUrl("")
    }
  }, [fileDownloadUrl])

  const download = (event, headers, data) => {
    console.log("headers",headers)
    event.preventDefault()
    const output = makeCSV([headers, ...data])
    const blob = new Blob([output]);
    const url =URL.createObjectURL(blob)

    console.log('output',output)
    setFiledownloadUrl(url)

  }

  return (
    <div>
      <Button onClick={event => download(event, props.headers(), props.data())}>{props.children}</Button>
      <a className="hidden"
        download={props.filename}
        href={fileDownloadUrl}
        ref={e => {
          if (e) { e.style.display="none" }
          setHiddenButtonRef(e)}
        }
      >download it</a>
    </div>
  )
}