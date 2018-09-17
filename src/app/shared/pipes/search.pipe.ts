import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'search' })
export class SearchText implements PipeTransform {
  transform(data: any[], searchText: string, inputColumn) {
    if (searchText == null || searchText == "") {
      return data;
    }

    return data.filter(function(value) {
      return (
        value[inputColumn].toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    });
  }
}
