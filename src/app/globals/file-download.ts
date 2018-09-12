export class FileDownloadUtility {
  // private saveFile(blob, fileName) {
  //     const downloadLink = document.createElement('a');
  //     downloadLink.target = '_blank';
  //     downloadLink.download = fileName;
  //     const URL = window.URL || (window as any).webkitURL;
  //     const downloadUrl = URL.createObjectURL(blob);
  //     downloadLink.href = downloadUrl;
  //     document
  //         .querySelector('body')
  //         .appendChild(downloadLink);
  //     downloadLink.click();
  //     document
  //         .querySelector('body')
  //         .removeChild(downloadLink);
  //     URL.revokeObjectURL(downloadUrl);
  // }

  // ************ for reports

  /**
   * download xls file
   * @param response api data to save the file
   * @param filename name of the file
   * This will download xls file
   */
  public downloadXlsxFile(response, filename) {
    const blob = new Blob([response.body], {
      type: 'application/vnd.ms-excel'
    });
    const link = document.createElement('a');
    link.setAttribute(
      'href',
      'data:application/vnd.ms-excel;charset=utf-8,' +
        encodeURIComponent(response.body)
    );
    link.href = window.URL.createObjectURL(blob);
    link.download = filename + '.xls';
    link.click();
  }

  /**
   * download csv file
   * @param response api data to save the file
   * @param filename name of the file
   * * This will download csv file
   */
  downloadCsv(response: any, filename: string) {
    const blob = new Blob([response.body], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename + '.csv');
    } else {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename + '.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

  /**
   * download pdf file
   * @param response api data to save the file
   * @param filename name of the file
   *  * This will download pdf file
   */
  public downloadPdf(response, filename = '') {
    const blob = new Blob([response.body], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.setAttribute(
      'href',
      'data:application/pdf;charset=utf-8,' + encodeURIComponent(response.body)
    );
    link.href = window.URL.createObjectURL(blob);
    link.download = filename + '.pdf';
    link.click();
  }
}
