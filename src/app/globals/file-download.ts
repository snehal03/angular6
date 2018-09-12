export class FileDownloadUtility {

  private saveFile(blob, fileName) {
      const downloadLink = document.createElement('a');
      downloadLink.target = '_blank';
      downloadLink.download = fileName;
      const URL = window.URL || (window as any).webkitURL;
      const downloadUrl = URL.createObjectURL(blob);
      downloadLink.href = downloadUrl;
      document
          .querySelector('body')
          .appendChild(downloadLink);
      downloadLink.click();
      document
          .querySelector('body')
          .removeChild(downloadLink);
      URL.revokeObjectURL(downloadUrl);
  }


// for reports
  public downloadXlsxFile(response,filename) {
    console.log("result body--",response.body)
      let blob = new Blob([response.body],{type: 'application/vnd.ms-excel'});
      let link = document.createElement('a');
      link.setAttribute('href', 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(response.body));
      link.href = window.URL.createObjectURL(blob);
      link.download =  filename+'.xls';
      link.click();

  }


  downloadCsv(data: any, filename: string) {
      let parsedResponse = data.text();
      let blob = new Blob([parsedResponse], { type: 'text/csv' });
      let url = window.URL.createObjectURL(blob);


      if (navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, filename + '.csv');
      } else {
          let a = document.createElement('a');
          a.href = url;
          a.download = filename + '.csv';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      }
      window.URL.revokeObjectURL(url);
  }


  public downloadPdf(response,filename = '') {
    let blob = new Blob([response.body],{type: 'application/pdf'});
    let link = document.createElement('a');
    link.setAttribute('href', 'data:application/pdf;charset=utf-8,' + encodeURIComponent(response.body));
    link.href = window.URL.createObjectURL(blob);
    link.download = filename + '.pdf';
    link.click();
}
}
